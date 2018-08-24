import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
import { Campaign } from "./campaign.model";

@Injectable()
export class JabbaService {

  campaign: Campaign

  constructor(private http: Http) {
    this.campaign = new Campaign(
      'jabba',
      'Jabba\'s Realm',
      'Missões')
  }

  missions(): any {
    return this.http.get('./assets/cam2.json')
      .pipe(map(res =>
        res.json().filter(value=>
          value.key.includes('M_')
          && value.key.includes('_NAME')
          && !value.key.includes('SARLACC')
        )
      ))
  }

  items(id: string): any {
    return this.http.get('./assets/cam2.json')
      .pipe(map(res =>
        res.json().filter(value=> value.key.includes(id))
       ))
  }

}
