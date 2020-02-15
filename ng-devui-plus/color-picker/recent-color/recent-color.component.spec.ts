import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentColorComponent } from './recent-color.component';

describe('RecentColorComponent', () => {
  let component: RecentColorComponent;
  let fixture: ComponentFixture<RecentColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
