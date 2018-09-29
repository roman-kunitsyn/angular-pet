import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [CommonModule, UserRoutingModule],
  declarations: [
    UserLoginComponent,
    UserLogoutComponent,
    UserProfileComponent,
    UserRegistrationComponent
  ],
  exports: [
    UserLoginComponent,
    UserLogoutComponent,
    UserProfileComponent,
    UserRegistrationComponent
  ]
})
export class UserModule {}
