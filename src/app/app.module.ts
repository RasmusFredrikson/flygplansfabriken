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
import { ToggleDirective } from './shared/toggle.directive';
import { AndrahandsuthyrningComponent } from './your-apartment/andrahandsuthyrning/andrahandsuthyrning.component';
import { ForandringComponent } from './your-apartment/forandring/forandring.component';
import { FelanmalanComponent } from './your-apartment/felanmalan/felanmalan.component';
import { ParkeringComponent } from './your-apartment/parkering/parkering.component';
import { TrivselComponent } from './your-apartment/trivsel/trivsel.component';
import { UnderhallComponent } from './your-apartment/underhall/underhall.component';
import { MaklareComponent } from './maklare/maklare.component';
import { ContactsComponent } from './contacts/contacts.component';
import { StadgarComponent } from './stadgar/stadgar.component';

@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    NewsComponent,
    ApartmentComponent,
    YourTenantComponent,
    TelefonplanComponent,
    HomeComponent,
    NotFoundComponent,
    ToggleDirective,
    AndrahandsuthyrningComponent,
    ForandringComponent,
    FelanmalanComponent,
    ParkeringComponent,
    TrivselComponent,
    UnderhallComponent,
    MaklareComponent,
    ContactsComponent,
    StadgarComponent
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
