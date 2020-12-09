import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
