import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileTabOneComponent } from './profile-tab-one/profile-tab-one.component';
import { ProfileTabTwoComponent } from './profile-tab-two/profile-tab-two.component';
import { ProfileTabThreeComponent } from './profile-tab-three/profile-tab-three.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{
    path: '',
    component: ProfileComponent,
    children: [
        {
            path: '',
            redirectTo: '1',
            pathMatch: 'full'
        },
        {
            path: '1',
            component: ProfileTabOneComponent
        },
        {
            path: '2',
            component: ProfileTabTwoComponent
        },
        {
            path: '3',
            component: ProfileTabThreeComponent
        }
    ]
},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class ProfileRoutingModule { }