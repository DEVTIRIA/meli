import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonSingleComponent } from './skeleton-single.component';

describe('SkeletonSingleComponent', () => {
  let component: SkeletonSingleComponent;
  let fixture: ComponentFixture<SkeletonSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
