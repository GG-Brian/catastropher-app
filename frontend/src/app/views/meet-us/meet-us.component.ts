import { Component, OnInit } from '@angular/core';
import { JavascriptLoaderService } from 'src/app/services/javascript-loader.service';

@Component({
  selector: 'app-meet-us',
  templateUrl: './meet-us.component.html',
  styleUrls: ['./meet-us.component.scss'],
})
export class MeetUsComponent {

  constructor( private javascriptFile: JavascriptLoaderService) {
    this.javascriptFile.LoadMeetUsFiles(["meet-us-carousel"])
  }

}