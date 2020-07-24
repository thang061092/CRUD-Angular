import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from './book/list/list.component';
import {AddComponent} from './book/add/add.component';
import {EditComponent} from './book/edit/edit.component';


const routes: Routes = [
  {path: 'books', component: ListComponent},
  {path: 'books/create', component: AddComponent},
  {path: 'books/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
