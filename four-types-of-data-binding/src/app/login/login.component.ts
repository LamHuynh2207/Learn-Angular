import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = ''; // Default username
  pwd: string = ''; // Default password
  onLogin(): void {
    console.log('onLogin is called');
  }
}
