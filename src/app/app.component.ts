import { Component, OnInit, TemplateRef } from '@angular/core';
import { nomenclatura } from './models/nomenclatura';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  {
  
  title = 'direccionTest';
  mensajeHijo:string=''
  mensaje:string=''

  constructor( private modalService:BsModalService){
    
  }

  ngOnInit(): void {
    //this.buildForm();
    
  }

  onMensajeHijo(mensaje:string) {
    this.mensajeHijo=mensaje;
   }

  openModal(template:TemplateRef<any>){
    var modalRef : BsModalRef;
    modalRef = this.modalService.show(template)

  }
  closeModal(){
    this.modalService.hide()
  }
  cargarMensaje(mensaje:string){
    this.mensaje = mensaje
    console.log(this.mensaje)
  }

}
