import { Component, OnInit } from '@angular/core';
import { UserpermissionsService } from 'src/app/providers/userpermissions.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private userPermissionsService: UserpermissionsService) { }

  ngOnInit() {}

  login(name: string, password: string){
    console.log(name + " y " + password);
  }

}
