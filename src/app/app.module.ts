import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//user defined
import { PostCreateComponent } from './post-section/post_create/post-create.component';
import { Header } from './header-comp/header.component';
import { postList } from './post-section/post_list/post-list.component';
//user defined

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//for inputmodule
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';

//for firebase

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    Header,
    postList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
