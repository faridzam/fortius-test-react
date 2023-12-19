import axios, { Axios, AxiosRequestConfig, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';

type IConfig = AxiosRequestConfig & {
  isLoading?: boolean;
};

const requestConfig: IConfig = {
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 5000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
};

async function refreshToken() {
  const response = await axios.request({
    method: "POST",
    url: `${process.env.REACT_APP_SERVER_BASE_URL}/oauth/token`,
    withCredentials: true,
    headers: { "Content-Type": "application/json"},
    data: {
      'grant_type': 'refresh_token',
      'refresh_token': Cookies.get('refresh'),
      'client_id': process.env.REACT_APP_API_CLIENT_ID,
      'client_secret': process.env.REACT_APP_API_CLIENT_SECRET,
      'scope': ''
    }
  })
  Cookies.set('access', response.data.access_token, {expires: 60, secure: false})
  Cookies.set('refresh', response.data.refresh_token, {expires: response.data.expires_in, secure: false})
  return response.data.access_token
}

class HttpRequest {
  api: Axios;
  constructor() {
    this.api = axios.create(requestConfig);

    let refreshPromise: Promise<AxiosResponse<any, any>> | null = null;
    const clearPromise = () => refreshPromise = null;

    this.api.interceptors.request.use(
      (config) => {
        if (Cookies.get('access')) {
          config.headers['Authorization'] = `Bearer ${Cookies.get('access')}`
        }
        return config;
      },
      (error: any) => {
        // trigger alert
        return Promise.reject(error);
      },
    );

    this.api.interceptors.response.use(
      (res: any) => {
        // if (res.config.showSpinner) {
        //   decreaseRequestCount();
        // }
        return res;
      },
      async (error: any) => {
        try {
          if (typeof error.response.data.message === 'object' && error.response.data.message !== 'Unauthenticated.') {
            let message: string[] = [];
            Object.entries(error.response.data.message).forEach(([key, value]) => {
              message.push(`\n${key}: ${String(value)}`)
            });
            alert(message)
          } else if (typeof error.response.data.message === 'string' && error.response.data.message !== 'Unauthenticated.') {
            alert(error.response.data.message)
          }
          let originalRequest = error.config
          if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
  
            if (!refreshPromise) {
              refreshPromise = refreshToken()
              .finally(clearPromise);
            }
  
            const token = await refreshPromise;
            originalRequest.headers.authorization = `Bearer ${token}`;
  
            return axios.request(originalRequest);
          }
          return Promise.reject(error);
        } catch (error) {
          console.log(error)
        }
        
        
      },
    );
  }

  async get(endpoint: string, config?: IConfig) {
    return this.api.get(endpoint, config);
  }
  async post(endpoint: string,data: any, config?: IConfig) {
    return this.api.post(endpoint, data, config);
  }
  async patch(endpoint: string,data: any, config?: IConfig) {
    return this.api.patch(endpoint, data, config);
  }
  async delete(endpoint: string) {
    return this.api.delete(endpoint);
  }
}

export const apiRequest = new HttpRequest();