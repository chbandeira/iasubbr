import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FreedomFighterService } from '../campaign/freedom-fighter.service';
import { JabbaService } from '../campaign/jabba.service';
import { TutorialService } from '../campaign/tutorial.service';
import { Campaign } from '../campaign/campaign.model';
import { EncounterService } from '../campaign/encounter.service';

@Component({
  selector: 'iasub-body-dialogs',
  templateUrl: './body-dialogs.component.html',
  styleUrls: ['./body-dialogs.component.css']
})
export class BodyDialogsComponent implements OnInit {

  campaign: Campaign

  constructor(
    private freedomFighterService: FreedomFighterService,
    private jabbaService: JabbaService,
    private tutorialService: TutorialService,
    private encounterService: EncounterService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let idCampaign = this.route.parent.snapshot.params['id']
    let idMission = this.route.snapshot.params['id'].substr(0, 4)
    let items: any

    if(idCampaign == this.freedomFighterService.campaign.idCampaign){
      this.campaign = this.freedomFighterService.campaign
      items = this.freedomFighterService.items(idMission)
    }
    else if(idCampaign == this.jabbaService.campaign.idCampaign){
      this.campaign = this.jabbaService.campaign
      items = this.jabbaService.items(idMission)
    }
    else if(idCampaign == this.tutorialService.campaign.idCampaign){
      idMission = this.route.snapshot.params['id'].substr(0, 9)
      if (idMission.includes('VET')){
        idMission = this.route.snapshot.params['id'].substr(0, 7)
      }
      this.campaign = this.tutorialService.campaign
      items = this.tutorialService.items(idMission)
    }
    else {
      idMission = this.route.snapshot.params['id'].substr(0, 12)
      if (idMission.includes('TASK')){
        idMission = this.route.snapshot.params['id'].substr(0, 7)
      }
      this.campaign = this.encounterService.campaign
      items = this.encounterService.items(idMission)
    }

    items.subscribe(items => {
      this.campaign.items = items
      this.campaign.nameNav = items.find(value => value.key == idMission+'_NAME').en
    })
  }

}
