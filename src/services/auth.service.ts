import React from 'react';
import { LoginRequest } from '../dto/login-request.dto';
import { LoginResponse } from '../dto/login-response.dto';

import { BASE_URL } from '../utils/url';

class AuthService {
  async login(loginRequest: LoginRequest) {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(loginRequest),
    });
    const parsedResponse = (await response.json()) as LoginResponse;
    if (!response.ok) {
      throw new Error('Cant Login');
    }
    return parsedResponse;
  }
}

export default AuthService;
