import { ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { BodyListComponent } from './body-list/body-list.component';
import { BodyDialogsComponent } from './body-dialogs/body-dialogs.component';
import { CampaignComponent } from './campaign/campaign.component';

import { FreedomFighterService } from './campaign/freedom-fighter.service';
import { TutorialService } from './campaign/tutorial.service';
import { JabbaService } from './campaign/jabba.service';
import { EncounterService } from './campaign/encounter.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    BodyListComponent,
    BodyDialogsComponent,
    CampaignComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    FreedomFighterService,
    TutorialService,
    JabbaService,
    EncounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
