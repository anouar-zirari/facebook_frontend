import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Invitation } from "../model/invitation";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class InvitationService {


    apiUrl = 'http://localhost:8080/api/v1/invitation';
    

    constructor(private http: HttpClient) {

    }


    friendshipInvitation(invitation: Invitation): Observable<Invitation> {
        return this.http.post<Invitation>(`${this.apiUrl}`, invitation); 
    }

    friendshipResponse(senderId: number, receiverId: number, response: boolean) {
        let params = new HttpParams();
        params = params.append('senderId', senderId);
        params = params.append('receiverId', receiverId);
        params = params.append('response', response);
        return this.http.post(`${this.apiUrl}/friendshipResponse`, params); 
    }

}