import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RootObject } from "../models/root-object.model";
import { Observable } from "rxjs/Observable";



@Injectable()
export class UserService {
     

    users:RootObject;


    constructor(private myHttpClient: HttpClient) {}

    public getUsers():Observable<RootObject>{
        return this.myHttpClient.get<RootObject>("https://reqres.in/api/users",{responseType:'json'});
    }
}