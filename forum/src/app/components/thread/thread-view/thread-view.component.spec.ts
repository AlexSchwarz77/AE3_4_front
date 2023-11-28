import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadViewComponent } from './thread-view.component';

describe('ThreadViewComponent', () => {
  let component: ThreadViewComponent;
  let fixture: ComponentFixture<ThreadViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreadViewComponent]
    });
    fixture = TestBed.createComponent(ThreadViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
