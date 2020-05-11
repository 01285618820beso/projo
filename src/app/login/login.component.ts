import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { faFacebook,faTwitter,faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(public service :AuthService) { }

  ngOnInit(): void {
  }
  loging () {
     this.service.loging();
  }
  logingf () {
    this.service.logingf();
 }

 logingt () {
  this.service.logingt();
}


}
