import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {HomeComponent} from './home/home.component';
import {FaqComponent} from './faq/faq.component';
import {NewsComponent} from './news/news.component';
import {ApartmentComponent} from './your-apartment/apartment.component';
import {YourTenantComponent} from './your-tenant/your-tenant.component';
import {TelefonplanComponent} from './telefonplan/telefonplan.component';
import {AndrahandsuthyrningComponent} from './your-apartment/andrahandsuthyrning/andrahandsuthyrning.component';
import {ForandringComponent} from './your-apartment/forandring/forandring.component';
import {FelanmalanComponent} from './your-apartment/felanmalan/felanmalan.component';
import {ParkeringComponent} from './your-apartment/parkering/parkering.component';
import {TrivselComponent} from './your-apartment/trivsel/trivsel.component';
import {UnderhallComponent} from './your-apartment/underhall/underhall.component';
import {MaklareComponent} from './maklare/maklare.component';
import {ContactsComponent} from './contacts/contacts.component';
import {StadgarComponent} from './stadgar/stadgar.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'hem',
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
    component: ApartmentComponent,
    children: [
      {
        path: 'andrahandsuthyrning',
        component: AndrahandsuthyrningComponent
      },
      {
        path: 'forandring',
        component: ForandringComponent
      },
      {
        path: 'felanmalan',
        component: FelanmalanComponent
      },
      {
        path: 'parkering',
        component: ParkeringComponent
      },
      {
        path: 'trivsel',
        component: TrivselComponent
      },
      {
        path: 'underhallansvar',
        component: UnderhallComponent
      }
    ]
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
    path: 'maklare',
    component: MaklareComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'stadgar',
    component: StadgarComponent
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
