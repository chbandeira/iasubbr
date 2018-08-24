import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
import { Campaign } from "./campaign.model";

@Injectable()
export class FreedomFighterService {

  campaign: Campaign

  constructor(private http: Http) {
    this.campaign = new Campaign(
      'freedom-fighter',
      'Flight of the <i>Freedom Fighter</i>',
      'Missões')
  }

  missions(): any {
    return this.http.get('./assets/cam1.json')
      .pipe(map(res =>
        res.json().filter(value=>
          value.key.includes('M_')
          && value.key.includes('_NAME')
          && !value.key.includes('TEST_')
          && !value.key.includes('TRAITOR')
          && !value.key.includes('Darpik')
          && !value.key.includes('Captain')
        )
      ))
  }

  items(id: string): any {
    return this.http.get('./assets/cam1.json')
      .pipe(map(res =>
        res.json().filter(value=> value.key.includes(id))
       ))
  }

}
