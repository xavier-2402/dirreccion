import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-modal-funcionalidad',
  templateUrl: './modal-funcionalidad.component.html',
  styleUrls: ['./modal-funcionalidad.component.css']
})
export class ModalFuncionalidadComponent implements OnInit {

  @Output() eventoHijo= new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }
  enviarPadre(){
    this.eventoHijo.emit("evento hijo")
  }

}
