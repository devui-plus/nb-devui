import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartInputDemoComponent } from './smart-input-demo.component';

describe('SmartInputDemoComponent', () => {
  let component: SmartInputDemoComponent;
  let fixture: ComponentFixture<SmartInputDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartInputDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartInputDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
