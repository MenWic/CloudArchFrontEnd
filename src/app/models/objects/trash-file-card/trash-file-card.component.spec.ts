import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashFileCardComponent } from './trash-file-card.component';

describe('TrashFileCardComponent', () => {
  let component: TrashFileCardComponent;
  let fixture: ComponentFixture<TrashFileCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrashFileCardComponent]
    });
    fixture = TestBed.createComponent(TrashFileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
