import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerDemoComponent } from './color-picker-demo.component';

describe('ColorPickerDemoComponent', () => {
  let component: ColorPickerDemoComponent;
  let fixture: ComponentFixture<ColorPickerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPickerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPickerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
