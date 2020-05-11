import { UserService } from './services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projo';
  constructor(private userser:UserService,private authser : AuthService ,private route :ActivatedRoute , router:Router ){
    this.authser.user.subscribe (user=>{
      if (user)
      {
        this.userser.save(user);
        let returnurl=this.route.snapshot.queryParamMap.get('returnurl')||'/';
        router.navigateByUrl(returnurl);
      }
    })
  }

}
