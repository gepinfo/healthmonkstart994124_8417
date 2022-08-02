import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SefscreenComponent } from './sefscreen/sefscreen.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { UpdateauthorizationComponent } from './authorization/updateauthorization/updateauthorization.component';
import { ManagerolesComponent } from './manageroles/manageroles.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { ManagecontrolComponent } from './managecontrol/managecontrol.component';
import { UserComponent } from './user/user.component';
import { ProfilesettingsComponent } from './user/profilesettings/profilesettings.component';
import { VaultadminComponent } from './vaultadmin/vaultadmin.component';
import { TemplateComponent } from './template/template.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
{ path: 'sefscreen', component: SefscreenComponent, canActivate: [AuthGuard] },
{ path: 'signup', component: SignupComponent },
{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'authorization', component: AuthorizationComponent, canActivate: [AuthGuard] },
{ path: 'updateauthorization', component: UpdateauthorizationComponent, canActivate: [AuthGuard] },
{ path: 'manageroles', component: ManagerolesComponent, canActivate: [AuthGuard] },
{ path: 'manageusers', component: ManageusersComponent, canActivate: [AuthGuard] },
{ path: 'managecontrol', component: ManagecontrolComponent, canActivate: [AuthGuard] },
{ path: 'usermanagement', component: UserComponent, canActivate: [AuthGuard] },
{ path: 'profile', component: ProfilesettingsComponent, canActivate: [AuthGuard] },
{ path: 'vaultadmin', component: VaultadminComponent, canActivate: [AuthGuard] },
       { path: '', component: TemplateComponent, pathMatch: 'full'   } ,
{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },

{ path : 'exercisescr', loadChildren: () => import('./exercisescr/exercisescr.module').then(m => m.ExercisescrModule), canActivate: [AuthGuard] } , 
{ path : 'trackworkoutfrontscreen ', loadChildren: () => import('./trackworkoutfrontscreen /trackworkoutfrontscreen .module').then(m => m.Trackworkoutfrontscreen Module), canActivate: [AuthGuard] } , 
{ path : 'frequentlytrackedworkouts', loadChildren: () => import('./frequentlytrackedworkouts/frequentlytrackedworkouts.module').then(m => m.FrequentlytrackedworkoutsModule), canActivate: [AuthGuard] } , 
{ path : 'workoutwalkingdetails', loadChildren: () => import('./workoutwalkingdetails/workoutwalkingdetails.module').then(m => m.WorkoutwalkingdetailsModule), canActivate: [AuthGuard] } , 
{ path : 'afterdetailswalkingsection', loadChildren: () => import('./afterdetailswalkingsection/afterdetailswalkingsection.module').then(m => m.AfterdetailswalkingsectionModule), canActivate: [AuthGuard] } , 
{ path : 'workoutreminderpopupscreen', loadChildren: () => import('./workoutreminderpopupscreen/workoutreminderpopupscreen.module').then(m => m.WorkoutreminderpopupscreenModule), canActivate: [AuthGuard] } , 
{ path : 'workoutswimmingdetails', loadChildren: () => import('./workoutswimmingdetails/workoutswimmingdetails.module').then(m => m.WorkoutswimmingdetailsModule), canActivate: [AuthGuard] } , 
{ path : 'afterdetailsswimmingsection', loadChildren: () => import('./afterdetailsswimmingsection/afterdetailsswimmingsection.module').then(m => m.AfterdetailsswimmingsectionModule), canActivate: [AuthGuard] } , 
{ path : 'afterdeletingswimmingsection', loadChildren: () => import('./afterdeletingswimmingsection/afterdeletingswimmingsection.module').then(m => m.AfterdeletingswimmingsectionModule), canActivate: [AuthGuard] } , 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
