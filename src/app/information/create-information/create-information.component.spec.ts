import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInformationComponent } from './create-information.component';

describe('CreateInformationComponent', () => {
  let component: CreateInformationComponent;
  let fixture: ComponentFixture<CreateInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
