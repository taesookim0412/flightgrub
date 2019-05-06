import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "", loadChildren: "./food/food.module#FoodModule"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled", onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
