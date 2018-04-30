import { Component } from '@angular/core';
import { UserService } from './shared/services/user-service.service';
import { RootObject } from './shared/models/root-object.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public usersData:any=[];

  constructor(private myService:UserService){}
  

  ngOnInit() {
    this.myService.getUsers().subscribe(data =>{this.usersData=data});
    
  }
  
}
