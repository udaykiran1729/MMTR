import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userid='';
  password='';

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    if (localStorage.getItem("token")=="true"){
      this.router.navigate(['/Home']);
      console.log("navigated through token");
    }
  }


  login() {


    this.afAuth.signInWithEmailAndPassword(this.userid, this.password)
      .then(() => {

        alert('You have sucessfully Logged in '+this.userid);
        localStorage.setItem("token","true");
        // localStorage.setItem("MMTR-UserId",this.userid);
        this.router.navigate(['/Home']);
      },err=>{alert('Incorrect Credentials');
    });
  }

  forgot(){
    if (this.userid==""){
      alert('Please Enter valid mail ID');
    }
    else{
      this.afAuth.sendPasswordResetEmail(this.userid)
      .then(()=>{
        alert("You will be getting a password link to your registered mail adress")
      },err=>{alert("Wrong Command"); console.log(err)});

    }
  }
}
