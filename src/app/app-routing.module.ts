import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "register", pathMatch: "full" },
  { path: "register", component: RegisterationComponent },
  { path: "search", component: SearchDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
