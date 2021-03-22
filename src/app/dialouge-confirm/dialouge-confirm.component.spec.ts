import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialougeConfirmComponent } from './dialouge-confirm.component';

describe('DialougeConfirmComponent', () => {
  let component: DialougeConfirmComponent;
  let fixture: ComponentFixture<DialougeConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialougeConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialougeConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
