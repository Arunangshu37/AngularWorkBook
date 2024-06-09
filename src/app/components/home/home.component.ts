import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public routeDetails: Map<string, string>  =  new Map<string, string>([['Home', ''], ['Archives', 'widgets'],  ['About', 'about']]);

  constructor(){
  }
	
  public getRouteEntries(): [string, string][] {
    return Array.from(this.routeDetails.entries());
  }
}
