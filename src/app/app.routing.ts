import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from './auth-guard.service';

import { HomeComponent } from './home.component';
import { FeaturesComponent } from './features.component';
import { PricingComponent } from './pricing.component';
import { AboutUsComponent } from './about-us.component';

import { DashboardComponent } from './dashboard.component';
import { ModalComponent } from './modal.component';
import { FeedbackModalComponent } from './feedbackModal.component';
import { WebsiteDashboardComponent } from './website-dashboard.component';
import { FeedbackDetailComponent } from './feedback-detail.component';
import { SettingsComponent } from './settings.component';

const appRoutes: Routes = [
//  {
//    path: '',
//    redirectTo: '/dashboard',
//    pathMatch: 'full'
//  },
  {
    path: '',
    component: HomeComponent, 
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'features',
    component: FeaturesComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'website-dashboard',
    component: WebsiteDashboardComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'feedback-detail/:id',
    component: FeedbackDetailComponent
  },
  {
    path: 'modal',
    component: ModalComponent
  },
  {
    path: 'feedbackModal',
    component: FeedbackModalComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [DashboardComponent, ModalComponent, FeedbackModalComponent, WebsiteDashboardComponent, FeedbackDetailComponent,
                                HomeComponent, FeaturesComponent, PricingComponent, AboutUsComponent, SettingsComponent];
