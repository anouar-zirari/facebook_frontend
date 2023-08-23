import { Component, OnInit } from '@angular/core';
import { ModalService } from '../service/modal.service';

@Component({
  selector: 'app-token-expired-page',
  templateUrl: './token-expired-page.component.html',
  styleUrls: ['./token-expired-page.component.css']
})
export class TokenExpiredPageComponent implements OnInit {

  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
  }

}
