import { HttpClient } from "@angular/common/http";
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

    share(post: Post): Observable<Post> {
        post.user = this.userService.user;
        return this.http.post<Post>(`${this.apiUrl}/save`, post);
    }

    getPostsByUser() {
        return this.http.post<Post[]>(`${this.apiUrl}/find-user-posts`, this.userService.user);
    }

    // from chat gpt
    emitPostAdded(): void {
        this.postAddedSource.next();
    }


}