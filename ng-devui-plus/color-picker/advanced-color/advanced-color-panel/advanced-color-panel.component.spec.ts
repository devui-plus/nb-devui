import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedColorPanelComponent } from './advanced-color-panel.component';

describe('AdvancedColorPanelComponent', () => {
  let component: AdvancedColorPanelComponent;
  let fixture: ComponentFixture<AdvancedColorPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedColorPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedColorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
