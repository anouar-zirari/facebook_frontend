import { Post } from "./post";
import { User } from "./user";

export class Comment {
    id!: number;
    comment!: string;
    post!: Post;
    user!: User;
}