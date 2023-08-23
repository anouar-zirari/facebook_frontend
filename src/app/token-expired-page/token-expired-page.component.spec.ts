import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenExpiredPageComponent } from './token-expired-page.component';

describe('TokenExpiredPageComponent', () => {
  let component: TokenExpiredPageComponent;
  let fixture: ComponentFixture<TokenExpiredPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenExpiredPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TokenExpiredPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
