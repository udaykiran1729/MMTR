import { Component, Output ,EventEmitter} from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import {Database,set,ref,update} from '@angular/fire/database';
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { user } from "@angular/fire/auth";
@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent {
  mindate=new Date().toISOString().split("T")[0];

  new1=localStorage.getItem('comp1');
  new2=localStorage.getItem('comp2');

  dat=localStorage.getItem('comp3');
  time=localStorage.getItem('comp4');
  userid=localStorage.getItem("MMTR_UserId");

  constructor(public db:AngularFireDatabase,public router:Router,private afAuth:AngularFireAuth){
    console.log("User Id:"+this.userid+"  "+localStorage.getItem("token"));
  }

  forlen:any=[];

  update(){

    if (localStorage.getItem("token")!="true"){
      alert("please login");
    }

    if (this.new1!=null && this.new2!=null && this.time!=null){
      if (this.new1.trim()=='' || this.new2.trim()=='' || this.time.trim()==''){
        alert('Please Fill out the fields properly');
      }
      else{
        var n=localStorage.getItem("edit_index");
        const m={
          id:n,
          time:this.time,
          date:this.dat,
          link:this.new2,
          description:this.new1
        }

        if (this.userid==null){
          alert("You have not singned in");
          // this.router.navigate([""]);
        }


        if (n!=null){
          this.db.list('/users/'+this.userid+'/Remainders').set(n,m);
          alert("Remainders updated sucessfully");
          this.router.navigate(['/Remainders']);
        }
      }
    }
  }
  cancel(){
    if (window.confirm("Your have some unsaved changes"))
    {
      this.router.navigate(['Remainders']);
    }
  }

}
