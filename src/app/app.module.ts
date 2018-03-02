import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {AboutUsComponent} from './components/aboutus/aboutus.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './components/home/home.component';
import {ListingComponent} from './components/listing/listing.component';
import {HowItWorksComponent} from './components/how-it-works/how-it-works.component';
import {NewsComponent} from './components/news/news.component';
import {ContactUsComponent} from './components/contact-us/contact-us.component';
import {ServicesComponent} from './components/services/services.component';
import {ListingDetailsComponent} from './components/listing-details/listing-details.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { RegisterComponent } from './components/register/register.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import {BrandService} from './services/brand.service';
import {TypeService} from './services/type.service';
import {CategoryService} from './services/category.service';

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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    BrandService,
    TypeService,
    CategoryService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule {
}
