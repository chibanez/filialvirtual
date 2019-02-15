import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  constructor(private http: HttpClient, private ngxXml2jsonService: NgxXml2jsonService) { }

  getCuentas() {

    const url = 'http://10.0.110.246:9081/WSCuentasWAS/CuentasService';

    const body = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" ` +
                  `xmlns:ser="http://services.AhorroMutual.webServices.smsv.com.ar/"><soapenv:Header/>` +
                  `<soapenv:Body>` +
                  `<ser:getCuentas>` +
                  `<arg0>3423938</arg0>` +
                  `</ser:getCuentas>` +
                  `</soapenv:Body>` +
                  `</soapenv:Envelope>`;

    //console.log(body);
    return this.http.post(url, body, { responseType: 'text'}).pipe(
      map(
        (res: any) => {
          // console.log(res.text());
          //console.log('XML', res);
          const parser = new DOMParser();
          const xml = parser.parseFromString(res, 'text/xml');
          const obj = this.ngxXml2jsonService.xmlToJson(xml);
          //console.log('JSON', obj);
        
          //console.log('Atributo', obj['soapenv:Envelope']['soapenv:Body'][`ns2:getCuentasResponse`]['return']);
          return obj['soapenv:Envelope']['soapenv:Body'][`ns2:getCuentasResponse`]['return']['cuentas'];
          
        }
      )
    );
  }

  getMovimientos() {
    
    //console.log('LLEGUE A SERVICE');

    const url = 'http://10.0.110.246:9081/WSCuentasWAS/CuentasService';

    const body = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" ` +
                  `xmlns:ser="http://services.AhorroMutual.webServices.smsv.com.ar/"><soapenv:Header/>` +
                  `<soapenv:Body>` +
                  `<ser:getMovimientosHistoricos>` +
                  `<arg0>3423938</arg0>` +
                  `<arg1>100</arg1>` +
                  `<arg2>PESOS</arg2>` +
                  `<arg3>2019-02-14T00:00:00</arg3>` +
                  `<arg4>0</arg4>` +
                  `</ser:getMovimientosHistoricos>` +
                  `</soapenv:Body>` +
                  `</soapenv:Envelope>`;

    //console.log(body);
    return this.http.post(url, body, { responseType: 'text'}).pipe(
      map(
        (res: any) => {
          //console.log('VOLVI DEL POST');
          // console.log(res.text());
          //console.log('XML', res);
          const parser = new DOMParser();
          const xml = parser.parseFromString(res, 'text/xml');
          const obj = this.ngxXml2jsonService.xmlToJson(xml);
          //console.log('JSON', obj);
        
          //console.log('Atributo', obj['soapenv:Envelope']['soapenv:Body'][`ns2:getMovimientosHistoricosResponse`]['return']['movimientos']);
          return obj['soapenv:Envelope']['soapenv:Body'][`ns2:getMovimientosHistoricosResponse`]['return']['movimientos'];
          
        }
      )
    );
  }
}
