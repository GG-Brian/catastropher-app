import { Component, OnInit } from '@angular/core';
import { JavascriptLoaderService } from 'src/app/services/javascript-loader.service';

@Component({
  selector: 'app-relation-disaster-group',
  templateUrl: './relation-disaster-group.component.html',
  styleUrls: ['./relation-disaster-group.component.scss'],
})
export class RelationDisasterGroupComponent implements OnInit {

  constructor( private javascriptFile: JavascriptLoaderService) {
    this.javascriptFile.LoadMeetUsFiles(["relation-tabs"])
  }

  ngOnInit(): void {}

}