import { HttpClient, HttpEvent, HttpRequest } from "@angular/common/http";
import { identifierName } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../model/post";

@Injectable({
    providedIn: 'root'
})

export class imageService {
    apiUrl = 'http://localhost:8080/api/v1/image';
    constructor(private http: HttpClient) {}

    upload(file: File, post: Post): Observable<HttpEvent<any>> {
        const formData: FormData = new FormData();
        formData.append('file', file);
        formData.append('postId', JSON.stringify(post));
        return this.http.post<any>(`${this.apiUrl}/save`, formData);
    }

    getFiles(postId: number): Observable<any> {
        return this.http.get(`${this.apiUrl}/${postId}`, {
            responseType: 'blob'
        });
    }

 
}