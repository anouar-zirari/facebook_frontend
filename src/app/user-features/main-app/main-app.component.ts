import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavBarComponent } from 'src/app/nav-bar/nav-bar.component';
import { ScrollBackComponent } from 'src/app/scroll-back/scroll-back.component';

@Component({
  selector: 'app-main-app',
  standalone: true,
  imports: [CommonModule, RouterModule, NavBarComponent, ScrollBackComponent],
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css']
})
export class MainAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
