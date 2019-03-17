export default class AuthService {
  isLoggedIn = () => {
    const token = this.getToken()
    return !!token
  }

  setToken = jwt => {
    localStorage.setItem('jwt_token', jwt)
  }

  getToken = () => {
    return localStorage.getItem('jwt_token')
  }
}
