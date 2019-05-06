import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MatFormFieldModule, MatInputModule } from "@angular/material";


import { FoodNavComponent } from './food-nav/food-nav.component';
import { FoodHeaderComponent } from './food-header/food-header.component';

import { FoodLandingComponent } from './food-landing/food-landing.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { FoodAdminComponent } from './food-admin/food-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '../http.service';


const routes:Routes = [
{path: "", component: FoodLandingComponent},
{path: "menu/:category", component: FoodMenuComponent},
{path: "admin", component: FoodAdminComponent},
]

@NgModule({
  declarations: [FoodLandingComponent, FoodNavComponent, FoodHeaderComponent, FoodMenuComponent, FoodAdminComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule, 
    MatInputModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [HttpService],
})
export class FoodModule { }
