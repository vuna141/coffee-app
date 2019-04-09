import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { ProfileTabOneComponent } from './profile-tab-one/profile-tab-one.component';
import { ProfileTabTwoComponent } from './profile-tab-two/profile-tab-two.component';
import { ProfileTabThreeComponent } from './profile-tab-three/profile-tab-three.component';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile.routing';

@NgModule({
    imports: [
        CommonModule,
        ProfileRoutingModule
    ],
    exports: [],    
    declarations: [
        ProfileComponent,
        ProfileTabOneComponent,
        ProfileTabTwoComponent,
        ProfileTabThreeComponent
    ],
    providers: [],
})
export class ProfilePageModule { }
