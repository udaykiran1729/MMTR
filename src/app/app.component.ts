import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  posts:any[] = [];
  onupdate(pos:Event)
  {
      this.posts.push(pos);
  }
}
