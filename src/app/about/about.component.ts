import { Component, Inject, OnInit } from '@angular/core';
import {leader} from '../shared/leader';
import {LeaderService} from '../service/leader.service';
import { expand, flyInOut } from '../animation/app.animation';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class AboutComponent implements OnInit {

  constructor(private leaderService:LeaderService,@Inject('BaseURL') public BaseURL) { }
  
  leaderDetails:leader[];
  ngOnInit(): void {
     this.leaderService.getLeaderData().subscribe(leader => this.leaderDetails = leader);
  }

}
