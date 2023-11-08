import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveDirComponent } from './move-dir.component';

describe('MoveDirComponent', () => {
  let component: MoveDirComponent;
  let fixture: ComponentFixture<MoveDirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoveDirComponent]
    });
    fixture = TestBed.createComponent(MoveDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
