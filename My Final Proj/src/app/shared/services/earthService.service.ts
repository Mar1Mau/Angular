import { RootObject } from "../models/root-object.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { allCountries } from "../models/all-data.model";

@Injectable()
export class EarthService {
     

    countries:RootObject;
    
    public results:any[]=[];
    myUrl: string="http://restcountries.eu/rest/v2/all";


    constructor(private myHttpClient: HttpClient) {}

    public getCountries():Observable<RootObject>{
       return this.myHttpClient.get<RootObject>(this.myUrl,{responseType:'json'});
    }

    

        
    }
    
    
