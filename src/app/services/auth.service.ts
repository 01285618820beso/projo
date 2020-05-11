import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { auth } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { faFacebook, faTwitter, faGoogle,  } from '@fortawesome/free-brands-svg-icons';
import { faShoppingBasket ,faHeart ,faPlus,faMinus,faEye,faShoppingCart,faStar} from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  faface = faFacebook;
  faTwi=faTwitter;
  fag=faGoogle;
  fabag=faShoppingBasket;
  faheart=faHeart;
  faeye=faEye;
  faplus=faPlus;
  famin=faMinus;
  fashop=faShoppingCart;
  fastar=faStar;
  user:Observable <firebase.User>;

  constructor(private afauth : AngularFireAuth) {
    this.user = afauth.authState


   }
  loging () {
     this.afauth.auth.signInWithRedirect( new auth.GoogleAuthProvider() );
 }
 logingf () {
   this.afauth.auth.signInWithRedirect( new auth.FacebookAuthProvider() );
}

logingt () {
 this.afauth.auth.signInWithRedirect( new auth.TwitterAuthProvider() );
}
  


  logout(){
    this.afauth.auth.signOut();
  }
}
