import { Injectable } from "@angular/core";
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import { TokenExpiredPageComponent } from "../token-expired-page/token-expired-page.component";
import { Status } from "../model/status";
import { StatusComponent } from "../user-features/status/status.component";

@Injectable({
    providedIn: 'root'
})

export class ModalService {
    
    constructor(private modalService: NgbModal,private config: NgbModalConfig) {
        
       
    }

    openTokenExpiredPage() {
		const modalRef = this.modalService.open(TokenExpiredPageComponent);
		modalRef.componentInstance.name = 'token-expired';
        this.config.backdrop = 'static';
		this.config.keyboard = false;
	}

    closeTokenExpiredPage() {
        this.modalService.dismissAll(TokenExpiredPageComponent)
		
    }

    openStatusComponent() {
        const modalRef = this.modalService.open(StatusComponent);
        modalRef.componentInstance.name = 'status';
    }

}