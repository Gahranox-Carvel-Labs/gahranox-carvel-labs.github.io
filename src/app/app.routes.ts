import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { Products } from './products/products';
import { Careers } from './careers/careers';
import { Contact } from './contact/contact';
import { ComingSoonComponent } from './coming-soon/coming-soon';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ComingSoonComponent },
  { path: 'careers', component: Careers },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
