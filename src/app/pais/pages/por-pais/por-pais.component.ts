import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { CountryModel } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss']
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: CountryModel[] = [];

  constructor(private paisService: PaisService) {}

  buscar() {
    this.hayError = false;

    this.paisService.buscarPais(this.termino)
      .pipe(
        catchError((err) => {
          this.hayError = true;
          this.paises = [];
          return of([]);
        })
      )
      .subscribe((resp: CountryModel[]) => {  
        this.paises = resp
        console.log(resp);
        
      });
  }
}
