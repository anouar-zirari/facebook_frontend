import { Injectable } from "@angular/core";
import { User } from "../model/user";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class FreindProfileService{
    
    apiUrl: string = "http://localhost:8080/api/v1/user";

    
    constructor(private http: HttpClient){

    }

    getUserById(id: number): Observable<User> {
        return this.http.get<User>(`${this.apiUrl}/${id}`);
    }

}