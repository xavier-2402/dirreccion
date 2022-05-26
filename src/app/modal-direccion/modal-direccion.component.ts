import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-modal-direccion',
  templateUrl: './modal-direccion.component.html',
  styleUrls: ['./modal-direccion.component.css']
})
export class ModalDireccionComponent implements OnInit {

  @Output()
  eventoHijo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  enviarPadre() {
    
    this.eventoHijo.emit("evento hijo!!!!")
  }
  
}
