import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashHomeComponent } from './trash-home.component';

describe('TrashHomeComponent', () => {
  let component: TrashHomeComponent;
  let fixture: ComponentFixture<TrashHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrashHomeComponent]
    });
    fixture = TestBed.createComponent(TrashHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
