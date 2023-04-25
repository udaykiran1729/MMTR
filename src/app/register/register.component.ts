import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userid='';
  password='';

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  register() {
    this.afAuth.createUserWithEmailAndPassword(this.userid, this.password)
      .then(() => {
        alert('Created successfully');
        localStorage.setItem('user',this.userid);
        // this.router.navigate(['/Reaminders']);
      },err=>{alert('Something went worng');
    })

  }

}
