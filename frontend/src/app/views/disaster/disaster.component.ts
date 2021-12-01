import { Component, OnInit } from '@angular/core';
import { DisasterService } from 'src/app/services/disaster.service';
import { Disaster } from '../../models/disaster'

@Component({
  selector: 'app-disaster',
  templateUrl: './disaster.component.html',
  styleUrls: ['./disaster.component.scss'],
})
export class DisasterComponent implements OnInit {

  public disasters: Array<Disaster> = [];
  public myDisaster: Disaster;

  constructor(private disasterService: DisasterService) { }

  dataLoader() {
    this.disasterService.getDisasters().subscribe((allDisasters: Array<Disaster>) => {
      this.disasters = allDisasters;
    })
  }

  ngOnInit(): void { this.dataLoader(); }
}