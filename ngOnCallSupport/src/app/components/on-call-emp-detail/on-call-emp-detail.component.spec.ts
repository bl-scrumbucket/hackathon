import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnCallEmpDetailComponent } from './on-call-emp-detail.component';

describe('OnCallEmpDetailComponent', () => {
  let component: OnCallEmpDetailComponent;
  let fixture: ComponentFixture<OnCallEmpDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnCallEmpDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnCallEmpDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
