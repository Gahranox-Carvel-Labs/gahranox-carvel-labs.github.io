import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { ProductsComponent } from './products/products';
import { CareersComponent } from './careers/careers';
import { ContactComponent } from './contact/contact';
import { ComingSoonComponent } from './coming-soon/coming-soon';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'coming-soon', component: ComingSoonComponent },
  { path: '**', redirectTo: '' }
];
