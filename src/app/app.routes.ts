import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {HomeComponent} from './home/home.component';
import {FaqComponent} from './faq/faq.component';
import {NewsComponent} from './news/news.component';
import {ApartmentComponent} from './your-apartment/apartment.component';
import {YourTenantComponent} from './your-tenant/your-tenant.component';
import {TelefonplanComponent} from './telefonplan/telefonplan.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'Hem',
    pathMatch: 'full'
  },
  {
    path: 'hem',
    component: HomeComponent
  },
  {
    path: 'nyheter',
    component: NewsComponent
  },
  {
    path: 'ditt-boende',
    component: ApartmentComponent
  },
  {
    path: 'om-foreningen',
    component: YourTenantComponent
  },
  {
    path: 'om-telefonplan',
    component: TelefonplanComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

export const AppRoutes = RouterModule.forRoot(
  APP_ROUTES,
  {
    useHash: true
  }
);
