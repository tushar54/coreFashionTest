import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  message: string;
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
    role: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient) {}

  // Registration
  register(data: RegisterData): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/register`,
      data
    );
  }

  // Login
  login(data: LoginData): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.apiUrl}/login`, data)
      .pipe(
        tap((response) => {
          this.saveSession(response);
        })
      );
  }

  // Save login information
  private saveSession(response: AuthResponse): void {
    localStorage.setItem('authToken', response.token);

    localStorage.setItem(
      'authUser',
      JSON.stringify(response.user)
    );
  }

  // Get JWT token
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Get logged-in user
  getUser(): AuthResponse['user'] | null {
    const user = localStorage.getItem('authUser');

    return user ? JSON.parse(user) : null;
  }

  // Logout
  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
  }

  // Check whether a token exists
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}