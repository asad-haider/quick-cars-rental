import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutUsComponent} from './components/aboutus/aboutus.component';
import {HomeComponent} from './components/home/home.component';
import {ListingComponent} from './components/listing/listing.component';
import {NewsComponent} from './components/news/news.component';
import {ContactUsComponent} from './components/contact-us/contact-us.component';
import {HowItWorksComponent} from './components/how-it-works/how-it-works.component';
import {ServicesComponent} from './components/services/services.component';
import {ListingDetailsComponent} from './components/listing-details/listing-details.component';
import {NewsDetailsComponent} from './components/news-details/news-details.component';
import {RegisterComponent} from './components/register/register.component';
import {ReservationComponent} from './components/reservation/reservation.component';

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
      ],
    },
    {
      path: '**',
      redirectTo: '/',
      pathMatch: 'full'
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
