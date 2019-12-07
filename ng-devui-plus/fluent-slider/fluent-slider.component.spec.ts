import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluentSliderComponent } from './fluent-slider.component';

describe('FluentSliderComponent', () => {
  let component: FluentSliderComponent;
  let fixture: ComponentFixture<FluentSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluentSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluentSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
