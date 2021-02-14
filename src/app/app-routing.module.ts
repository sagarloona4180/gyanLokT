import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './login.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'userOne',
    loadChildren: () => import('./UserModuleOne/user-one.module').then(m => m.UserOneModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    // ,
    // canActivate: [LoginGuard] 
  },// redirect to `first-component`

  {
    path: 'userOne',
    loadChildren: () => import('./UserModuleOne/user-one.module').then(m => m.UserOneModule)
  },

  {
    path: 'userTwo',
    loadChildren: () => import('./userModuleTwo/user-two.module').then(m => m.UserTwoModule)
  },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
