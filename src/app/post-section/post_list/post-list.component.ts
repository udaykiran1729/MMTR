import {Component,Input} from '@angular/core';
import {getDatabase,onValue,ref} from '@angular/fire/database';
@Component({
  selector:'app-post-list',
  templateUrl:'./post-list.component.html',
  styleUrls:['./post-list.component.css']
})

export class postList{


  @Input() inp_val:any=[];
  // const db=getDatabase();

  // const star=ref(this.db,'users/user123/sche1');

  // onValue(star,(snapshot)=>
  // {
  //   const data=snapshot.val();
  // });




}
