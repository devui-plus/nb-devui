import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedColorComponent } from './advanced-color.component';

describe('AdvancedColorComponent', () => {
  let component: AdvancedColorComponent;
  let fixture: ComponentFixture<AdvancedColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
