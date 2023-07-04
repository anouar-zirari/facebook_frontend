import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Invitation } from "../model/invitation";
import { Observable, ObservedValueOf } from "rxjs";
import { __param } from "tslib";

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

    friendshipResponse(senderId: number, receiverId: number, response: boolean): Observable<boolean> {
        let params = new HttpParams();
        params = params.append('senderId', senderId);
        params = params.append('receiverId', receiverId);
        params = params.append('response', response);
        return this.http.post<boolean>(`${this.apiUrl}/friendshipResponse`, params); 
    }

    getInvitationBySender(senderId: number): Observable<Invitation[]> {
        return this.http.get<Invitation[]>(`${this.apiUrl}/find-inv-by-sender/${senderId}`);
    }

    getInvitationByReceiver(receiverId: number): Observable<Invitation[]> {
        return this.http
                .get<Invitation[]>(`${this.apiUrl}/find-inv-by-receiver/${receiverId}`);
    }

    getInvitationBySenderAndReceiver(senderId: number, receiverId: number): Observable<Invitation> {
        let param = new HttpParams();
        param = param.append("senderId", senderId);
        param = param.append("receiverId", receiverId);
                
        return this.http.post<Invitation>(
            `${this.apiUrl}/find-inv-by-sender-receiver`, param);
    }

}