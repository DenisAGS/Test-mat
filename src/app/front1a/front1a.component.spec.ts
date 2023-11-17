import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Front1aComponent } from './front1a.component';

describe('Front1aComponent', () => {
  let component: Front1aComponent;
  let fixture: ComponentFixture<Front1aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Front1aComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Front1aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
