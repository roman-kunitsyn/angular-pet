import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserLoginComponent } from "./user-login/user-login.component";
import { UserLogoutComponent } from "./user-logout/user-logout.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UserRegistrationComponent } from "./user-registration/user-registration.component";

const routes: Routes = [
  {
    path: "user/login",
    component: UserLoginComponent
  },
  {
    path: "user/logout",
    component: UserLogoutComponent
  },
  {
    path: "user/profile",
    component: UserProfileComponent
  },
  {
    path: "user/registration",
    component: UserRegistrationComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class UserRoutingModule {}
