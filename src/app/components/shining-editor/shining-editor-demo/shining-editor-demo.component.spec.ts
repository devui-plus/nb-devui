import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiningEditorDemoComponent } from './shining-editor-demo.component';

describe('ShiningEditorDemoComponent', () => {
  let component: ShiningEditorDemoComponent;
  let fixture: ComponentFixture<ShiningEditorDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiningEditorDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiningEditorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
