import { Gender } from "./gender";

export class User {

    id!: number;
    firstName!: string;
    lastName!: string;
    password!: string;
    email!: string;
    gender!: Gender;
    friends!: User[];
    
}