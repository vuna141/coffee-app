import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTabTwoComponent } from './profile-tab-two.component';

describe('ProfileTabTwoComponent', () => {
  let component: ProfileTabTwoComponent;
  let fixture: ComponentFixture<ProfileTabTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileTabTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTabTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
