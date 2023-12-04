import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public user: User = {
    _id: "",
    email: "",
    password: "",
  };

  constructor(private authService: AuthService, private router: Router) {}

  signIn() {
    this.authService.signInUser(this.user).subscribe(
      {
        next: (response: any) => {
          console.log(response);
          localStorage.setItem('token', response.token);
          this.router.navigate(['/inicio']);
        },
        error: (error: any) => {
          console.log(error);
        }
      }
    );
  }
}
