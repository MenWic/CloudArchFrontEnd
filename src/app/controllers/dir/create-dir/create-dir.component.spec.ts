import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDirComponent } from './create-dir.component';

describe('CreateDirComponent', () => {
  let component: CreateDirComponent;
  let fixture: ComponentFixture<CreateDirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDirComponent]
    });
    fixture = TestBed.createComponent(CreateDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
