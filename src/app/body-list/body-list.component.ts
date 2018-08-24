import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FreedomFighterService } from '../campaign/freedom-fighter.service';
import { JabbaService } from '../campaign/jabba.service';
import { TutorialService } from '../campaign/tutorial.service';
import { EncounterService } from '../campaign/encounter.service';
import { Campaign } from '../campaign/campaign.model';

@Component({
  selector: 'iasub-body-list',
  templateUrl: './body-list.component.html',
  styleUrls: ['./body-list.component.css']
})
export class BodyListComponent implements OnInit {

  campaign: Campaign

  constructor(
    private freedomFighterService: FreedomFighterService,
    private jabbaService: JabbaService,
    private tutorialService: TutorialService,
    private encounterService: EncounterService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let idCampaign = this.route.parent.snapshot.params['id']

    if(idCampaign == this.freedomFighterService.campaign.idCampaign){
      this.campaign = this.freedomFighterService.campaign
      this.freedomFighterService.missions()
        .subscribe(res => this.campaign.items = res)
    }
    else if(idCampaign == this.jabbaService.campaign.idCampaign){
      this.campaign = this.jabbaService.campaign
      this.jabbaService.missions()
        .subscribe(res => this.campaign.items = res)
    }
    else if(idCampaign == this.tutorialService.campaign.idCampaign){
      this.campaign = this.tutorialService.campaign
      this.tutorialService.missions()
        .subscribe(res => this.campaign.items = res)
    }
    else {
      this.campaign = this.encounterService.campaign
      this.encounterService.encounters()
        .subscribe(res =>
          this.campaign.items = res.sort((a, b) => {
            if(a.en < b.en) return -1;
            if(a.en > b.en) return 1;
            return 0;
          }))
    }

  }

}
