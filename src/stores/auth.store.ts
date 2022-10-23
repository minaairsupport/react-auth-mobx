import { makeAutoObservable } from 'mobx';
import { LoginRequest } from '../dto/login-request.dto';
import authService from '../services/auth.service';

export default class AuthStore {
  private isAuthenticated = false;
  constructor(readonly authService: authService) {
    makeAutoObservable(this);
    this.isAuthenticated = !!this.getAcessToken();
  }

  async login(loginRequest: LoginRequest) {
    try {
      const tokenPayloadDto = await this.authService.login(loginRequest);
      localStorage.setItem('access-token', tokenPayloadDto['access-token']);
      console.log('tokenPayloadDto', tokenPayloadDto);
      this.setIsAuthenticated(true);
    } catch (error) {
      console.log('Login_FailedWithError', error);
      this.setIsAuthenticated(false);
    }
  }

  getAcessToken() {
    return localStorage.getItem('access-token');
  }
  setIsAuthenticated(value: boolean) {
    this.isAuthenticated = value;
  }
  getIsAuthenticated() {
    return this.isAuthenticated;
  }
}
