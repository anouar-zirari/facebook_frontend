import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollBackComponent } from './scroll-back.component';

describe('ScrollBackComponent', () => {
  let component: ScrollBackComponent;
  let fixture: ComponentFixture<ScrollBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
