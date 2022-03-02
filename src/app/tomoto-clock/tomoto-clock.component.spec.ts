import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomotoClockComponent } from './tomoto-clock.component';

describe('TomotoClockComponent', () => {
  let component: TomotoClockComponent;
  let fixture: ComponentFixture<TomotoClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TomotoClockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TomotoClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
