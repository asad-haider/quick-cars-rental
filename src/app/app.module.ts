import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AboutUsComponent} from './aboutus/aboutus.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {ListingComponent} from './listing/listing.component';
import {HowItWorksComponent} from './how-it-works/how-it-works.component';
import {NewsComponent} from './news/news.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {ServicesComponent} from './services/services.component';
import {ListingDetailsComponent} from './listing-details/listing-details.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { RegisterComponent } from './register/register.component';
import { ReservationComponent } from './reservation/reservation.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    HomeComponent,
    ListingComponent,
    HowItWorksComponent,
    NewsComponent,
    ContactUsComponent,
    ServicesComponent,
    ListingDetailsComponent,
    NewsDetailsComponent,
    RegisterComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule {
}
