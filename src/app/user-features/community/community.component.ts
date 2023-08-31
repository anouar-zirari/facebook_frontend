import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { StatusComponent } from '../status/status.component';
import { PostComponent } from '../post/post.component';
import { Observable } from 'rxjs';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [CommonModule, StatusComponent, PostComponent],
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  scrollDistance: number = 0;

  constructor(private elementRef: ElementRef, public modalService: ModalService) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    this.scrollDistance = window.scrollY;      
  }



}
