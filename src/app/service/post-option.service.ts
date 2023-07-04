import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Comment } from "../model/comment";
import { Observable } from "rxjs";
import { LikeDto } from "../model/likeDto";

@Injectable({
    providedIn: 'root'
})
export class postOptionService {

    private apiUrlComment = 'http://localhost:8080/api/v1/comment';
    private apiUrlPost = 'http://localhost:8080/api/v1/post';
    private apiUrllike = 'http://localhost:8080/api/v1/like';
    constructor(private http: HttpClient) {}

    getAllCommentForPost(postId: number): Observable<Comment[]> {
        return this.http.get<Comment[]>(`${this.apiUrlComment}/comments-by-post/${postId}`);
    }

    savePostOption(userId: number,postId: number, comment?: any, like?: any) {
        let params = new HttpParams();
    
        params = params.append("userId", userId);
        params = params.append("postId", postId);
        params = params.append("comment", comment);
        params = params.append("like", like);
        
        return this.http.post(`${this.apiUrlPost}/post-options`, params);
    }

    getPostLikes(postId: number): Observable<LikeDto> {

        return this.http.get<LikeDto>(`${this.apiUrllike}/find-likes-for-user/${postId}`);
    }


}