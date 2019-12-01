import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePreviewDemoComponent } from './image-preview-demo.component';

describe('ImagePreviewDemoComponent', () => {
  let component: ImagePreviewDemoComponent;
  let fixture: ComponentFixture<ImagePreviewDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagePreviewDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePreviewDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
