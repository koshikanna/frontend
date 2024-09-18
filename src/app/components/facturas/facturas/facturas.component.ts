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

  page: number = 1;

  atras() {
    if (this.page > 1){
      this.page = this.page - 1;
      this.ObtenerFacturas();
    }
  }

  siguiente() {
    this.page = this.page + 1;
    this.ObtenerFacturas();
  }

  facturas:Facturas[];

  constructor(private facturaServicio: FacturasService, private router:Router) { }

  ngOnInit(): void {
    this.ObtenerFacturas();
  }

  private ObtenerFacturas() {
    this.facturaServicio.listarFacturas(this.page).subscribe(dato => {
      this.facturas = dato;
    })
  }
  
  eliminarFactura(id:number) {
    swal({
      title : "¿Estás seguro?",
      text : "Confirma si deseas eliminar la factura",
      type : "warning",
      showCancelButton : true,
      confirmButtonColor : '#3085d6',
      cancelButtonColor : '#d33',
      confirmButtonText : "Si, eliminalo",
      cancelButtonText : "No, cancelar",
      confirmButtonClass : "btn btn-success",
      cancelButtonClass : "btn btn-danger",
      buttonsStyling : true
    }).then((result) => {
      if (result.value) {
        this.facturaServicio.eliminarFactura(id).subscribe(dato => {
          //console.log(dato);
          this.ObtenerFacturas();
          swal(
            'Factura eliminada',
            'La factura a sido eliminada',
            'success'
          )
        });
      }
    })
  }

  detalleFactura(id:number) {
    this.router.navigate(['detalle-factura',id]);
    }

}
