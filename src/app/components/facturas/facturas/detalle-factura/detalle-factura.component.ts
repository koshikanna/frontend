import { Component, OnInit } from '@angular/core';
import { Facturas } from 'src/app/models/facturas/facturas';
import { FacturasService } from 'src/app/servicios/facturas/facturas.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalle-factura',
  templateUrl: './detalle-factura.component.html',
  styleUrls: ['./detalle-factura.component.css']
})
export class DetalleFacturaComponent implements OnInit {

  id:number;
  factura:Facturas;
  constructor(private route:ActivatedRoute, private facturaServicio:FacturasService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.factura = new Facturas();
    this.facturaServicio.getFacturaById(this.id).subscribe(dato => {
      this.factura = dato;
      console.log(this.factura)
    });
  }
}
