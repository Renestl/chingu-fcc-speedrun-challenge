import { Component, OnInit } from '@angular/core';

import { Camper } from '../../shared/camper.model';
import { CampersService } from '../../shared/campers.service';

@Component({
  selector: 'app-brownie',
  templateUrl: './brownie.component.html',
  styleUrls: ['./brownie.component.scss']
})
export class BrownieComponent implements OnInit {
  campers: Camper[];
  errorMessage: string;

  constructor(private camperService: CampersService) { }

  ngOnInit() {
    this.camperService.getCampers()
        .subscribe(campers => {this.campers = campers,
        error => this.errorMessage = <any>error
      });
  }

  onRecent() {
    this.campers.sort((a,b) => b.recent - a.recent);
  }

  onAll() {
    this.campers.sort((a,b) => b.alltime - a.alltime);
  }

}
