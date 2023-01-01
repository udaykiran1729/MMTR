import { Component, Output ,EventEmitter} from "@angular/core";
import {Database,set,ref,update} from '@angular/fire/database';

@Component({
  selector:'app-post-create',
  templateUrl:'./post-create.component.html',
  styleUrls:['./post-create.component.css']
})


export class PostCreateComponent{
  title='MMTR';
  constructor(public database:Database){
  }
  user='user123/sche1'
  new1='';
  new2='';
  dat='';
  time='';
  @Output() post=new EventEmitter();
  m=Array<String>;
  k=0;
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
      set(ref(this.database,'users/'+ this.user),
      {
        time:this.time,
        date:this.dat,
        link:this.new2,
        description:this.new1
      });
      alert('Remainder Updated');
      this.post.emit(m);
    }
  }

}
