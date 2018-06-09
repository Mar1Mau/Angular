import { Component, OnInit } from '@angular/core';
import { EarthService } from '../shared/services/earthService.service';
import { RootObject } from '../shared/models/root-object.model';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  public earthData: RootObject;

  public errMsg;
  imgLink: string = "/assets/images/Not-found-matches.jpg";
  constructor(private myService: EarthService) { }


  ngOnInit() {
    this.myService.getCountries().subscribe(data => { this.earthData = data });

  }

  search(param: string) {

    return this.myService.searchCountries(param).subscribe(data => this.earthData = data,

      error => this.errMsg = error );
    

  }


}




