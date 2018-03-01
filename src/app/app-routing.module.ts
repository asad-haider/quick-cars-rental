import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutUsComponent} from './aboutus/aboutus.component';
import {HomeComponent} from './home/home.component';
import {ListingComponent} from './listing/listing.component';
import {NewsComponent} from './news/news.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {HowItWorksComponent} from './how-it-works/how-it-works.component';
import {ServicesComponent} from './services/services.component';
import {ListingDetailsComponent} from './listing-details/listing-details.component';
import {NewsDetailsComponent} from './news-details/news-details.component';
import {RegisterComponent} from './register/register.component';
import {ReservationComponent} from './reservation/reservation.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: 'car-listings',
        children: [
          {
            path: '',
            component: ListingComponent,
            pathMatch: 'full',
          },
          {
            path: 'details',
            component: ListingDetailsComponent,
          }
        ]
      },
      {
        path: 'how-it-works',
        component: HowItWorksComponent,
      },
      {
        path: 'news',
        children: [
          {
            path: '',
            component: NewsComponent,
            pathMatch: 'full',
          },
          {
            path: 'details',
            component: NewsDetailsComponent,
          }
        ]
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
      },
      {
        path: 'services',
        component: ServicesComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'reservation',
        component: ReservationComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
