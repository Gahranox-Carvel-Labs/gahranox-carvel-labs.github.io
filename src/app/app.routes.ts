import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { CareersComponent } from './careers/careers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
    { path: 'about-us', component: AboutUsComponent, data: { animation: 'AboutPage' } },
    { path: 'careers', component: CareersComponent, data: { animation: 'CareersPage' } },
    { path: 'contact-us', component: ContactUsComponent, data: { animation: 'ContactPage' } },
    { path: 'products', component: ProductsComponent, data: { animation: 'ProductsPage' } },
    { path: '**', redirectTo: '' }
];
