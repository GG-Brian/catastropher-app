import { Component, OnInit } from '@angular/core';
import { UserpermissionsService } from 'src/app/providers/userpermissions.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public registeredUsername;

  constructor(private userPermissionsService: UserpermissionsService) { }
  
  ngOnInit() { this.registeredUsername = this.userPermissionsService.getUserName();}

  login(name: string, password: string){ this.userPermissionsService.setOptions(name, password) }

}