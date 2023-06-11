import { Gender } from "./gender";
import { Post } from "./post";

export class User {

    id!: number;
    firstName!: string;
    lastName!: string;
    password!: string;
    email!: string;
    gender!: Gender;
    friends!: User[];
    posts!: Post[];
    
}