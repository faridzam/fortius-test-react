import { useRef } from "react"
import { apiRequest } from "../../../utils/apiRequest/apiRequest"

export const useAuth = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleLogin = async () => {

    const response = await apiRequest.post('/login', {
      username: emailRef.current?.value,
      password: passwordRef.current?.value,
    })

    if (response.status === 200) {
      window.location.href = '/employee';
    }
  }

  return {
    emailRef,
    passwordRef,
    handleLogin
  }
}