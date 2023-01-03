import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user="user123";
  posts:any[] = [];
  c=0;

  onupdate(pos:Event)
  {
      /* this.posts.push(pos);
          it is used to get data from the post-creation.ts
      */

  }


}
