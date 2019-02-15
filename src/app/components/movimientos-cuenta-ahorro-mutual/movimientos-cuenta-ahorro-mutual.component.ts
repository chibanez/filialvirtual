import { Component, OnInit } from '@angular/core';
import { CuentasService } from '../../services/cuentas.service';

@Component({
  selector: 'app-movimientos-cuenta-ahorro-mutual',
  templateUrl: './movimientos-cuenta-ahorro-mutual.component.html',
  styleUrls: ['./movimientos-cuenta-ahorro-mutual.component.css']
})
export class MovimientosCuentaAhorroMutualComponent implements OnInit {

  movimientos: any[] = [];
  loading: boolean = false;
  displayedColumns: string[] = ['fecha', 'descMovimiento', 'descServicio', 'importe', 'saldoOperativo'];

  constructor(private cuentasService: CuentasService) { }

  ngOnInit() {
    //console.log('LLEGUE A MOVIMIENTOS');
    this.loading = true;
    this.cuentasService.getMovimientos().subscribe(data => {
      //console.log('LLEGUE A MOVIMIENTOS 2');
      //console.log('En compo movimientos', data);
      this.movimientos = data;
      this.loading = false;
    });
  }

}
