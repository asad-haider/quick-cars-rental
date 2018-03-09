import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';


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
import {NewsDetailsComponent} from './components/news-details/news-details.component';
import {RegisterComponent} from './components/register/register.component';
import {ReservationComponent} from './components/reservation/reservation.component';
import {BrandService} from './services/brand.service';
import {TypeService} from './services/type.service';
import {CategoryService} from './services/category.service';
import {ListingService} from './services/listing.service';
import {ArrayFilter} from './pipes/ArrayFilter';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NewsService} from './services/news.service';
import {NgxPaginationModule} from 'ngx-pagination';
import {AuthService} from './services/auth.service';
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {TokenInterceptor} from './interceptors/TokenInterceptor';
import {NgProgressModule} from '@ngx-progressbar/core';
import {NgProgressHttpModule} from '@ngx-progressbar/http';
import {AuthInterceptor} from './interceptors/AuthInterceptor';
import {AgmCoreModule} from '@agm/core';
import {SubscriptionService} from './services/subscription.service';
import {DataService} from './services/DataService';

@NgModule({
  declarations: [
    // Components
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
    ReservationComponent,

    // Filters
    ArrayFilter,

    BreadcrumbComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDgOtJJNsjw5UcukGWEw6HyGiyxnz_aHj8',
      libraries: ['places']
    }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgProgressModule.forRoot(),
    NgProgressHttpModule
  ],
  providers: [
    BrandService,
    TypeService,
    CategoryService,
    ListingService,
    NewsService,
    AuthService,
    SubscriptionService,
    DataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule {
}
