import { Component} from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Component({
  selector:'app-post-create',
  templateUrl:'./post-create.component.html',
  styleUrls:['./post-create.component.css']
})




export class PostCreateComponent{
  // title='MMTR';
  mindate=new Date().toISOString().split("T")[0];
  // user="localStorage.getItem("MMTR-UserId")";
  new1='';
  new2='';
  dat=new Date().toISOString().split("T")[0];
  time='';
  userid:any;



  constructor(public db:AngularFireDatabase,public router:Router,private afAuth:AngularFireAuth){
      console.log(this.mindate==this.dat);
      this.afAuth.currentUser.then(data=>{this.userid=data?.uid;localStorage.setItem("userid",this.userid);});


      this.afAuth.currentUser.then(data=>{
        this.userid=data?.uid.toString();
        localStorage.setItem("MMTR_UserId",this.userid);
        const use=this.userid;
        db.list("/users/"+use+"/Remainders").valueChanges().
          subscribe((courses: any=[])=>
          {
            this.forlen=courses;
          });
          console.log("User Id:"+localStorage.getItem('MMTR_UserId')+"  "+localStorage.getItem("token"));
      });
      // console.log("User Id:"+localStorage.getItem('MMTR_UserId')+"  "+localStorage.getItem("token"));


  }



  // time:any;

  // @Output() post=new EventEmitter(); for eitting data

  forlen:any=[];

  onclimck(){
    if (localStorage.getItem("token")!="true"){
      alert("please login");
      // this.router.navigate([""]);
    }

    if (this.dat<this.mindate){
      alert("Date must be a later one");
    }

    if (this.new1.trim()=='' || this.new2.trim()=='' || this.time.trim()==''){
      alert('Please Fill out the fields properly');
    }


    else{

      // console.log(this.forlen.key);
      var n;
      if (this.forlen.length==0){
        n="0";
      }
      else{
        n=(parseInt(this.forlen[this.forlen.length-1].id)+1).toString();
      }
      const m={
        // key:this.getRandomString(Math.random()*10 as number),
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
      /*push data into the Firebase with randomly generated data*/


      this.db.list('/users/'+this.userid+'/Remainders').set(n,m);

      alert('Remainders are Updated');

    }
  }

}
