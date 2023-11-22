import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubviewComponent } from './subview.component';

describe('SubviewComponent', () => {
  let component: SubviewComponent;
  let fixture: ComponentFixture<SubviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubviewComponent]
    });
    fixture = TestBed.createComponent(SubviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
