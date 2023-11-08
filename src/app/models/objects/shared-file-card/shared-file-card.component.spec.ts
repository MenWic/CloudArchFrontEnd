import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedFileCardComponent } from './shared-file-card.component';

describe('SharedFileCardComponent', () => {
  let component: SharedFileCardComponent;
  let fixture: ComponentFixture<SharedFileCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedFileCardComponent]
    });
    fixture = TestBed.createComponent(SharedFileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
