import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Front3aComponent } from './front3a.component';

describe('Front3aComponent', () => {
  let component: Front3aComponent;
  let fixture: ComponentFixture<Front3aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Front3aComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Front3aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
