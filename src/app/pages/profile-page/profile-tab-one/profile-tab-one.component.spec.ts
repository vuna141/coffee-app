import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTabOneComponent } from './profile-tab-one.component';

describe('ProfileTabOneComponent', () => {
  let component: ProfileTabOneComponent;
  let fixture: ComponentFixture<ProfileTabOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileTabOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTabOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
