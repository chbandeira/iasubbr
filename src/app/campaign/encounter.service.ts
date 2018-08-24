import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
import { Campaign } from "./campaign.model";

@Injectable()
export class EncounterService {

  campaign: Campaign

  constructor(private http: Http) {
    this.campaign = new Campaign(
      'encounter',
      'Encounters',
      'Encontros')
  }

  encounters(): any {
    return this.http.get('./assets/tasks.json')
      .pipe(map(res =>
        res.json().filter(value=>
          value.key.includes('_NAME')
          && !value.key.includes('TEST_')
        )
      ))
  }

  items(id: string): any {
    return this.http.get('./assets/tasks.json')
      .pipe(map(res =>
        res.json().filter(value=> value.key.includes(id))
       ))
  }

}
