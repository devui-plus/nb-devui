import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiningEditorComponent } from './shining-editor.component';

describe('ShiningEditorComponent', () => {
  let component: ShiningEditorComponent;
  let fixture: ComponentFixture<ShiningEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiningEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiningEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
