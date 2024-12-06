import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Domyślna ścieżka
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Konfiguracja tras dla tego modułu
  exports: [RouterModule],
})
export class HomeRoutingModule {}
