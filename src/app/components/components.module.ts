import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CuentasAhorroMutualComponent } from './cuentas-ahorro-mutual/cuentas-ahorro-mutual.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../modules/material.module';
import { MovimientosCuentaAhorroMutualComponent } from './movimientos-cuenta-ahorro-mutual/movimientos-cuenta-ahorro-mutual.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
    declarations: [
        CuentasAhorroMutualComponent,
        MovimientosCuentaAhorroMutualComponent,
        LoadingComponent
      ],
    exports: [
        CuentasAhorroMutualComponent,
        MovimientosCuentaAhorroMutualComponent,
        LoadingComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        MaterialModule
    ]
})

export class ComponentsModule { }