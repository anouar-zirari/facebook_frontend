import { Status } from "./status";
import { User } from "./user";

export class Invitation {
    id!: number;
    status!: Status;
    receiver!: User;
    sender!: User;
    
    constructor(receiver?: User, sender?: User) {
        this.receiver = receiver as User;
        this.sender = sender as User;
    }
}