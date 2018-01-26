import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FaqComponent} from './faq/faq.component';
import {NewsComponent} from './news/news.component';
import {ApartmentComponent} from './your-apartment/apartment.component';
import {YourTenantComponent} from './your-tenant/your-tenant.component';
import {TelefonplanComponent} from './telefonplan/telefonplan.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AppRoutes} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    NewsComponent,
    ApartmentComponent,
    YourTenantComponent,
    TelefonplanComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
