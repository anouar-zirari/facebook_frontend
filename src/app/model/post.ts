import { User } from "./user";

export class Post{
    id!: number;
    content!: string;
    likes!: string;
    date!: Date;
    user!: User;

}