import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAddressComponent } from './user-address/user-address.component';
import { UserPassportComponent } from './user-passport/user-passport.component';
import { UserGeneralComponent } from './user-general/user-general.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserAddressComponent, UserPassportComponent, UserGeneralComponent]
})
export class UserInfoModule { }
