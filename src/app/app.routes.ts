import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./catalog/catalog.component').then(m => m.CatalogComponent)
    },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: '**', component: NotFoundComponent }  // Ruta no válida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
