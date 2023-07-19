import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSwiperCalendarComponent } from './ngx-swiper-calendar.component';

describe('NgxSwiperCalendarComponent', () => {
  let component: NgxSwiperCalendarComponent;
  let fixture: ComponentFixture<NgxSwiperCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxSwiperCalendarComponent]
    });
    fixture = TestBed.createComponent(NgxSwiperCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
