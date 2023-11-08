import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedDirCardComponent } from './shared-dir-card.component';

describe('SharedDirCardComponent', () => {
  let component: SharedDirCardComponent;
  let fixture: ComponentFixture<SharedDirCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedDirCardComponent]
    });
    fixture = TestBed.createComponent(SharedDirCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
