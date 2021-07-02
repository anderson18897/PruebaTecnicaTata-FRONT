import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';
import { ExchangeResponse } from '../models/ExchangeResponse';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ExchangeRequest } from '../models/ExchangeRequest';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrls: ['./calcular.component.css']
})
export class CalcularComponent implements OnInit {

  mount: number = null;
  currency_origin = '';
  currency_destiny = '';
  exchangeResponse: ExchangeResponse = null;

  constructor(
    private productoService: ProductoService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onCalculate(): void {
    const exchangeRequest = new ExchangeRequest(this.mount, this.currency_origin, this.currency_destiny);
    this.productoService.calculate(exchangeRequest).subscribe(
      data => {
        this.exchangeResponse = data;
        this.toastr.success('El monto del cambio es: '+this.exchangeResponse.mount_exchange, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/resultado']);
        
        console.log(this.exchangeResponse);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        // this.router.navigate(['/']);
        console.log(err);
      }
    );
  }

}
