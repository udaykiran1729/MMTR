import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public afAuth:AngularFireAuth,private router:Router){

  }

  signOut() {



    this.afAuth.signOut()
      .then(() => {
        alert("You have logged out");
        localStorage.clear();
        localStorage.setItem("token","false");
        this.router.navigate(['']);
      })
      .catch((error) => {
        alert("something went wrong");
      });
  }

}
