import { Component, Output ,EventEmitter} from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import {Database,set,ref,update} from '@angular/fire/database';


@Component({
  selector:'app-post-create',
  templateUrl:'./post-create.component.html',
  styleUrls:['./post-create.component.css']
})


export class PostCreateComponent{
  title='MMTR';
  constructor(public database:Database,public db:AngularFireDatabase){

  }


  user='user123'
  new1='';
  new2='';
  dat='';
  time='';


  // @Output() post=new EventEmitter(); for eitting data

  forlen:any=[];


  onclimck(){
    if (this.new1.trim()=='' || this.new2.trim()=='' || this.dat.trim()=='' || this.time.trim()==''){
      alert('Please Fill out the fields properly');
    }


    else{

      const m={
        time:this.time,
        date:this.dat,
        link:this.new2,
        description:this.new1
      }

      /*push data into the Firebase with randomly generated data*/
      this.db.list('/users/user123/Remainders').push(m);


      alert('Remainders are Updated');


      /*this.post.emit(m);

        it is used to output data from one componenet to another
        */
    }
  }

}
