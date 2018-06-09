import { RootObject } from "../models/root-object.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()
export class EarthService {


    countries: RootObject;



    myUrl: string = "https://restcountries.eu/rest/v2/all";



    constructor(private myHttpClient: HttpClient) { }

    public getCountries(): Observable<RootObject> {
        return this.myHttpClient.get<RootObject>(this.myUrl);
    }



    searchCountries(p: string): Observable<RootObject> {

        const url = `https://restcountries.eu/rest/v2/name/${p}`;
        return this.myHttpClient.get<RootObject>(url).catch(this.errorHandler);
    }

    errorHandler(error: HttpErrorResponse) {
        return Observable.throw(error.message || "server error");
    }
}


