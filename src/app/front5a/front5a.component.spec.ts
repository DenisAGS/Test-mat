import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Front5aComponent } from './front5a.component';

describe('Front5aComponent', () => {
  let component: Front5aComponent;
  let fixture: ComponentFixture<Front5aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Front5aComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Front5aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
