import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
import { Campaign } from "./campaign.model";

@Injectable()
export class TutorialService {

  campaign: Campaign

  constructor(private http: Http) {
    this.campaign = new Campaign(
      'tutorial',
      '<i>Legends of the Alliance</i> Tutorial',
      'Missões')
  }

  missions(): any {
    return this.http.get('../../assets/camt.json')
      .pipe(map(res =>
        res.json().filter(value=>
          value.key.includes('_NAME')
        )
      ))
  }

  items(id: string): any {
    return this.http.get('../../assets/camt.json')
      .pipe(map(res =>
        res.json().filter(value=> value.key.includes(id))
       ))
  }

}
