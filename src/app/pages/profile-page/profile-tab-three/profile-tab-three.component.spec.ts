import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTabThreeComponent } from './profile-tab-three.component';

describe('ProfileTabThreeComponent', () => {
  let component: ProfileTabThreeComponent;
  let fixture: ComponentFixture<ProfileTabThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileTabThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTabThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
