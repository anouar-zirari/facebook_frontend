import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-back',
  standalone: true,
  templateUrl: './scroll-back.component.html',
  styleUrls: ['./scroll-back.component.css']
})
export class ScrollBackComponent  {

  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  

}
