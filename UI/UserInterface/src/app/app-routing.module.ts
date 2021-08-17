import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductCatagoriesComponent } from './product-catagories/product-catagories.component';

const routes: Routes = [
  {path:'product', component: ProductComponent},
  {path:'productCatagories', component: ProductCatagoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
