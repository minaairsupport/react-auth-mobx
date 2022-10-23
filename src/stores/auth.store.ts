import { makeAutoObservable } from 'mobx';
import { LoginRequest } from '../dto/login-request.dto';
import authService from '../services/auth.service';

export default class AuthStore {
  private isAuthenticated = false;
  constructor(readonly authService: authService) {
    makeAutoObservable(this);
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
  setIsAuthenticated(value: boolean) {
    this.isAuthenticated = value;
  }
  getIsAuthenticated() {
    return this.isAuthenticated;
  }
}
