import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnCallEmpFormComponent } from './on-call-emp-form.component';

describe('OnCallEmpFormComponent', () => {
  let component: OnCallEmpFormComponent;
  let fixture: ComponentFixture<OnCallEmpFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnCallEmpFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnCallEmpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
