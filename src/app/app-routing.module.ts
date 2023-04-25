import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PostCreateComponent } from './post-section/post_create/post-create.component';
import { postList } from './post-section/post_list/post-list.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { PostEditComponent } from './post-section/post-edit/post-edit.component';

const routes: Routes = [
  {
    component:LoginComponent,
    path:'LogIn'
  },
  {
    component:AboutComponent,
    path:'About'
  },
  {
    component:PostEditComponent,
    path:'Edit'
  },
  {
    component:PostCreateComponent,
    path:'Home'
  },
  {
    component:postList,
    path:'Remainders'
  },
  {
    component:RegisterComponent,
    path:'Register'
  },
  {
    component:HeaderComponent,
    path:'Head'
  },

  {
    component:LoginComponent,
    path:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
