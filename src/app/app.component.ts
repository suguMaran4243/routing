import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router';
  constructor(private router:Router,private service:AuthService)
  {

  }
  login()
  {
    this.service.login();
   alert('Sucessfully loged in')
  }
  logout()
  {
    this.service.logout();
    alert('Please login')
  }
}
