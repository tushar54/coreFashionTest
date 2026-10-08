import { Component, inject } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './registration.html'
})
export class Registration {

  registerForm: FormGroup;
  private authService = inject(AuthService);

  constructor(
    private fb: FormBuilder
  ) {

    this.registerForm = this.fb.group({

      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ],

      confirmPassword: [
        '',
        Validators.required
      ]

    });

  }


  register() {

    // Stop if form is invalid
    if (this.registerForm.invalid) {

      this.registerForm.markAllAsTouched();

      return;
    }


    const {
      name,
      email,
      password,
      confirmPassword
    } = this.registerForm.value;


    // Check passwords
    if (password !== confirmPassword) {

      alert('Passwords do not match');

      return;
    }


    // Data we send to backend
    const userData = {
      name,
      email,
      password
    };


    this.authService.register(userData)
      .subscribe({

        next: (response) => {

          console.log('Registration successful:', response);

          alert('Account created successfully!');

          this.registerForm.reset();

        },

        error: (error) => {

          console.error('Registration error:', error);

          alert(
            error.error?.message ||
            'Registration failed'
          );

        }

      });

  }

}