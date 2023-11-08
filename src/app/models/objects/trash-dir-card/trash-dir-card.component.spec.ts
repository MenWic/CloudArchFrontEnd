import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashDirCardComponent } from './trash-dir-card.component';

describe('TrashDirCardComponent', () => {
  let component: TrashDirCardComponent;
  let fixture: ComponentFixture<TrashDirCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrashDirCardComponent]
    });
    fixture = TestBed.createComponent(TrashDirCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
