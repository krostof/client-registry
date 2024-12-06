import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [SharedModule, AuthRoutingModule, LoginComponent],
  exports: [LoginComponent],
})
export class AuthModule {}
