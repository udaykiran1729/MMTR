import {Component,Input} from '@angular/core';
import {getDatabase,onValue,ref} from '@angular/fire/database';
import {AngularFireDatabase} from '@angular/fire/compat/database'

@Component({
  selector:'app-post-list',
  templateUrl:'./post-list.component.html',
  styleUrls:['./post-list.component.css']
})

export class postList{


  inp_val:any=[];
  constructor(db:AngularFireDatabase){


    db.list('/users/user123/Remainders').valueChanges().
    subscribe((courses: any=[])=>
      {
        this.inp_val=courses;
      });
  }


  /* @Input() inp_val:any=[];
      it is used to get data from app.component.ts file
  */

}
