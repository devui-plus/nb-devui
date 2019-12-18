import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineSplitterComponent } from './inline-splitter.component';

describe('InlineSplitterComponent', () => {
  let component: InlineSplitterComponent;
  let fixture: ComponentFixture<InlineSplitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineSplitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineSplitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
