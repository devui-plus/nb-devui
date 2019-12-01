import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluentSliderDemoComponent } from './fluent-slider-demo.component';

describe('FluentSliderDemoComponent', () => {
  let component: FluentSliderDemoComponent;
  let fixture: ComponentFixture<FluentSliderDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluentSliderDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluentSliderDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
