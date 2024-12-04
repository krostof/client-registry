import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";



const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Rejestracja tras
  exports: [RouterModule] // Eksport RouterModule
})

export class AppRoutingModule {}
