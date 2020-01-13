import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrDevuiPlusComponent } from './mr-devui-plus.component';

describe('MrDevuiPlusComponent', () => {
  let component: MrDevuiPlusComponent;
  let fixture: ComponentFixture<MrDevuiPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrDevuiPlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrDevuiPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
