import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAuthenticationComponent } from './member-authentication.component';

describe('MemberAuthenticationComponent', () => {
  let component: MemberAuthenticationComponent;
  let fixture: ComponentFixture<MemberAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberAuthenticationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
