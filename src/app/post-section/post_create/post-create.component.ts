import { Component, Output ,EventEmitter} from "@angular/core";
import { from } from "rxjs";

@Component({
  selector:'app-post-create',
  templateUrl:'./post-create.component.html',
  styleUrls:['./post-create.component.css']
})


export class PostCreateComponent{
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
      this.post.emit(m);
    }
  }

}
