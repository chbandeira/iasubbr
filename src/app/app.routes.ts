import { Routes } from '@angular/router'
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from './about/about.component';
import { CampaignComponent } from './campaign/campaign.component';
import { BodyListComponent } from './body-list/body-list.component';
import { BodyDialogsComponent } from './body-dialogs/body-dialogs.component';


export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'campaign-t/:id', component: CampaignComponent,
      children: [
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        { path: 'list', component: BodyListComponent },
        { path: 'dialogs/:id', component: BodyDialogsComponent }]},
  { path: 'campaign-1/:id', component: CampaignComponent ,
      children: [
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        { path: 'list', component: BodyListComponent },
        { path: 'dialogs/:id', component: BodyDialogsComponent }]},
  { path: 'campaign-2/:id', component: CampaignComponent ,
      children: [
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        { path: 'list', component: BodyListComponent },
        { path: 'dialogs/:id', component: BodyDialogsComponent }]},
  { path: 'tasks/:id', component: CampaignComponent ,
      children: [
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        { path: 'list', component: BodyListComponent },
        { path: 'dialogs/:id', component: BodyDialogsComponent }]},
  { path: 'about', component: AboutComponent }
]
