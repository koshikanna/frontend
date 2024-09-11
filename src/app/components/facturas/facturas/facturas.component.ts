import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Facturas } from 'src/app/models/facturas/facturas';
import { Component, OnInit } from '@angular/core';
import { FacturasService } from 'src/app/servicios/facturas/facturas.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  facturas:Facturas[];
  constructor(private facturaServicio: FacturasService, private router:Router) { }

  ngOnInit(): void {
    this.ObtenerFacturas();
  }

  private ObtenerFacturas() {
    this.facturaServicio.listarFacturas().subscribe(dato => {
      this.facturas = dato;
    })
  }
  

}
