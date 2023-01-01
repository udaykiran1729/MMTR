import {Component,Input} from '@angular/core';

@Component({
  selector:'app-post-list',
  templateUrl:'./post-list.component.html',
  styleUrls:['./post-list.component.css']
})

export class postList{
    // @Input() m=[];
    k=0;
    // @Input() inp_val:any[]=[];
    @Input() inp_val:any=[];

    ongotolink(){

    }

}
