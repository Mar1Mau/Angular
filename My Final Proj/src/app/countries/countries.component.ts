import { Component, OnInit } from '@angular/core';
import { EarthService } from '../shared/services/earthService.service';
import { RootObject } from '../shared/models/root-object.model';
import { allCountries } from '../shared/models/all-data.model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  public earthData:any;
  
  constructor(private myService:EarthService){}
  

  ngOnInit() {
    this.myService.getCountries().subscribe(data =>{this.earthData=data});
    
  }

  
}


