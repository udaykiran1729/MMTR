import {Component,Input, OnInit} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/compat/database'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from "@angular/router";
import { ApplicationRef } from '@angular/core';


@Component({
  selector:'app-post-list',
  templateUrl:'./post-list.component.html',
  styleUrls:['./post-list.component.css']
})

export class postList {

  user=localStorage.getItem("MMTR_UserId");
  dis:any="disabled"
  inp_val:any=[];


  constructor(public db: AngularFireDatabase,private router:Router,private afAuth:AngularFireAuth,private appRef: ApplicationRef) {

      db.list("/users/"+this.user+"/Remainders").valueChanges().
        subscribe((courses: any=[])=>
        {
          this.inp_val=courses;
        });
        if (this.user==null){
          // alert("Not looged in");
          // this.router.navigate([""]);
        }
  }


    /*

    still In implementation


    */

    //delete the item
    deleteItem(item :any ){

        var s=item.id;
        for(var i=0;i<this.inp_val.length;i++){
          if (this.inp_val[i].id==s){
            if (window.confirm("Are you Sure")){
              this.db.object('/users/'+this.user+'/Remainders/' + s).remove();
              console.log('delete');
              break;
            }
          }
        }
    }

    //update the item
    updateItem(item:any) {
      var s=item.id;
      for(var i=0;i<this.inp_val.length;i++){
        if (this.inp_val[i].id==s){
          localStorage.setItem("edit_index",s);
        }
      }
      localStorage.setItem("Editobject",JSON.stringify(item));
      localStorage.setItem("comp1",item.description);
      localStorage.setItem("comp2",item.link);
      localStorage.setItem("comp3",item.date);
      localStorage.setItem("comp4",item.time);
    }

    refresh(){

      window.location.reload();

    }

}
