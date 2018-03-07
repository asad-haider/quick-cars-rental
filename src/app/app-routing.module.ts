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
          data: {
            title: 'About',
            breadcrumb: 'About'
          }
        },
        {
          path: 'car-listings',
          data: {
            title: 'Listing',
            breadcrumb: 'Listing'
          },
          children: [
            {
              path: '',
              component: ListingComponent,
              pathMatch: 'full',
              data: {
                title: 'Listing',
                breadcrumb: 'Listing'
              }
            },
            {
              path: 'details/:id',
              component: ListingDetailsComponent,
              data: {
                title: 'Detail',
                breadcrumb: 'Detail'
              }
            }
          ]
        },
        {
          path: 'how-it-works',
          component: HowItWorksComponent,
          data: {
            title: 'How it works',
            breadcrumb: 'How it works'
          }
        },
        {
          path: 'news',
          data: {
            title: 'News',
            breadcrumb: 'News'
          },
          children: [
            {
              path: '',
              component: NewsComponent,
              pathMatch: 'full',
            },
            {
              path: 'details/:id',
              component: NewsDetailsComponent,
              data: {
                title: 'Detail',
                breadcrumb: 'Detail'
              }
            }
          ]
        },
        {
          path: 'contact-us',
          component: ContactUsComponent,
          data: {
            title: 'Contact Us',
            breadcrumb: 'Contact Us'
          }
        },
        {
          path: 'services',
          component: ServicesComponent,
          data: {
            title: 'Services',
            breadcrumb: 'Services'
          }
        },
        {
          path: 'register',
          component: RegisterComponent,
          data: {
            title: 'Register',
            breadcrumb: 'Register'
          }
        },
        {
          path: 'reservation',
          component: ReservationComponent,
          data: {
            title: 'Reservation',
            breadcrumb: 'Reservation'
          }
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
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
