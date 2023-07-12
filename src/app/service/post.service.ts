import { HttpClient, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "../model/post";
import { Observable, Subject } from "rxjs";
import { UserService } from "./user.service";
import { User } from "../model/user";


@Injectable({
    providedIn: 'root'
})
export class Postservice {


    private apiUrl = 'http://localhost:8080/api/v1/post';
    private refresh: boolean = false;

    // from chat gpt
    private postAddedSource = new Subject<void>();
    postAdded$ = this.postAddedSource.asObservable();

    constructor(private http: HttpClient, private userService: UserService) { }

    share(post: Post, file: File): Observable<HttpEvent<any>> {
        post.user = this.userService.user;
        console.log(JSON.stringify(post));
        
        const formData: FormData = new FormData();
        formData.append('file', file);
        formData.append('post', JSON.stringify(post));
        return this.http.post<any>(`${this.apiUrl}/save`, formData);
    }

    getPostsByUser() {
        return this.http.post<Post[]>(`${this.apiUrl}/find-user-posts`, this.userService.user);
    }

    // from chat gpt
    emitPostAdded(): void {
        this.postAddedSource.next();
    }


    getCommunity() {
        return this.http.post<Post[]>(`${this.apiUrl}/community`, this.userService.user);
    }


}