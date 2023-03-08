import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { VerRegionComponent } from './pages/ver-region/ver-region.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    VerPaisComponent,
    VerRegionComponent
  ],
  exports: [
    PorCapitalComponent,
    PorPaisComponent,
    VerPaisComponent,
    VerRegionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaisModule { }
