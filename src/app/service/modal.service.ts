import { Injectable } from "@angular/core";
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import { TokenExpiredPageComponent } from "../token-expired-page/token-expired-page.component";

@Injectable({
    providedIn: 'root'
})

export class ModalService {
    
    constructor(private modalService: NgbModal,private config: NgbModalConfig) {
        
        config.backdrop = 'static';
		config.keyboard = false;
    }

    openTokenExpiredPage() {
		const modalRef = this.modalService.open(TokenExpiredPageComponent);
		modalRef.componentInstance.name = 'token-expired';
	}

    closeTokenExpiredPage() {
        this.modalService.dismissAll(TokenExpiredPageComponent)
		
    }

}