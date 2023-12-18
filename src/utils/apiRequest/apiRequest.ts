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
        console.log(error)
        let originalRequest = error.config
        if (!originalRequest._retry) {
          originalRequest._retry = true;

          if (!refreshPromise) {
            refreshPromise = refreshToken()
            .finally(clearPromise);
          }

          const token = await refreshPromise;
          originalRequest.headers.authorization = `Bearer ${token}`;

          return axios.request(originalRequest);

          // axios.request({
          //   method: "POST",
          //   url: `${process.env.REACT_APP_SERVER_BASE_URL}/oauth/token`,
          //   withCredentials: true,
          //   headers: { "Content-Type": "application/json"},
          //   data: {
          //     'grant_type': 'refresh_token',
          //     'refresh_token': Cookies.get('refresh'),
          //     'client_id': process.env.REACT_APP_API_CLIENT_ID,
          //     'client_secret': process.env.REACT_APP_API_CLIENT_SECRET,
          //     'scope': ''
          //   }
          // })
          // .then( (response) => {
          //   Cookies.set('access', response.data.access_token, {expires: 60, secure: false})
          //   Cookies.set('refresh', response.data.refresh_token, {expires: response.data.expires_in, secure: false})

          //   originalRequest.headers.Authorization = `Bearer ${response.data.access_token}`;
          //   axios.request(originalRequest).then((response) => {
          //     return response;
          //   }).catch((error) => {
          //     console.log('error retry original request')
          //   })
          // }).catch((error) => {
          //   // handle error
          //   console.log('error refresh token')
          // });
        } else {
          // window.location.href = '/login'
        }
        return Promise.reject(error);
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