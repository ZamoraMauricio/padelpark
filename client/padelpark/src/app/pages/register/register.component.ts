import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public newUser: User = {
    _id: "",
    email: "",
    password: "",
  };

  constructor(private authService: AuthService, private router: Router) {}

  signUp() {
    console.log(this.newUser);
    this.authService.signUpUser(this.newUser).subscribe(
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
