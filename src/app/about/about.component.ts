import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'iasub-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  version: string

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.http.get('../../package.json')
      .pipe(map(res => res.json())).subscribe(res => this.version = res.version)
  }

}
