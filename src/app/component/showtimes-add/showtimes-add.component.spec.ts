import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtimesAddComponent } from './showtimes-add.component';

describe('ShowtimesAddComponent', () => {
  let component: ShowtimesAddComponent;
  let fixture: ComponentFixture<ShowtimesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowtimesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtimesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
