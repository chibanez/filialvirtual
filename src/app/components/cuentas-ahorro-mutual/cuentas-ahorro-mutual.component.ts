import { Component, OnInit } from '@angular/core';
import { CuentasService } from '../../services/cuentas.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-cuentas-ahorro-mutual',
  templateUrl: './cuentas-ahorro-mutual.component.html',
  styleUrls: ['./cuentas-ahorro-mutual.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CuentasAhorroMutualComponent implements OnInit {

  cuentas: any[] = [];
  columnsToDisplay = ['matricula', 'cuenta', 'moneda', 'saldoOperativo'];
  expandedElement: DetalleCuenta | null;
  loading: boolean = false;

  constructor(private cuentasService: CuentasService) { }

  ngOnInit() {
    this.loading = true;
    this.cuentasService.getCuentas().subscribe((data: any[]) => {
      // console.log('EN COMPONENTE', data);
      this.cuentas = data;
      this.loading = false;
    });
  }

}

export interface DetalleCuenta {
  permiteDeposito: string;
  permiteExtraccion: string;
  fecha: string;
  saldoContable: string;
}
