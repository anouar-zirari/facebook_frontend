import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Notification } from "../model/notification";


@Injectable({
    providedIn: 'root'
})

export class NotificationServcice {

    private apiUrl = 'http://localhost:8080/api/v1/notification';

    constructor(private http: HttpClient) {

    }

    getAllFriendshipNotificationForUser(id: Number) {
        console.log("the id of the loged user",id);
        
       return this.http.get<Notification[]>(`${this.apiUrl}/find-all/${id}`);
    }

}