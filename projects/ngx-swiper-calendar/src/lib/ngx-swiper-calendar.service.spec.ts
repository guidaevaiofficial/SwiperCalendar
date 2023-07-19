import { TestBed } from '@angular/core/testing';

import { NgxSwiperCalendarService } from './ngx-swiper-calendar.service';

describe('NgxSwiperCalendarService', () => {
  let service: NgxSwiperCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSwiperCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
