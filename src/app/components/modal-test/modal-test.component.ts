
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-modal-test',
  templateUrl: './modal-test.component.html',
  styleUrls: ['./modal-test.component.css']
})
export class ModalTestComponent implements OnInit {

  nomenclatura:string='';
  detalle:string = ''
  form:any;
  direccion:string = '';
  direccionCompleta: string= '';
  valor:string=''
  type:number=1;
  descripcion:string = '';
  @Output() event = new EventEmitter<string>()
 
  constructor(private formBuilder: FormBuilder, private modalService:BsModalService) { }

  ngOnInit(): void {
    this.buildForm()
  }
  listaNomenclaturas: any[]=[
    {id:1,valor:"Avenida Calle",nomenclatura:"AC",type:1},
    {id:2,valor:"Administración",nomenclatura:"AD",type:2},
    {id:3,valor:"Adelante",nomenclatura:"ADL",type:0},
    {id:4,valor:"Aeropuerto",nomenclatura:"AER",type:1},
    {id:5,valor:"Agencia",nomenclatura:"AG",type:1},
    {id:6,valor:"Agrupación",nomenclatura:"AGP",type:1},
    {id:7,valor:"Avenida carrera",nomenclatura:"AK",type:1},
    {id:8,valor:"Altillo",nomenclatura:"AL",type:0},
    {id:9,valor:"Al lado",nomenclatura:"ALD",type:1},
    {id:10,valor:"Almacén",nomenclatura:"ALM",type:1},
    {id:11,valor:"Apartamento",nomenclatura:"AP",type:0},
    {id:12,valor:"Atrás",nomenclatura:"ATR",type:0},
    {id:13,valor:"Autopista",nomenclatura:"AUT",type:1},
    {id:14,valor:"Avenida",nomenclatura:"AV",type:1},
    {id:15,valor:"Anillo vial",nomenclatura:"AVIAL",type:1},
    {id:16,valor:"Bodega",nomenclatura:"BG",type:1},
    {id:17,valor:"Bloque",nomenclatura:"BL",type:0},
    {id:18,valor:"Boulevard",nomenclatura:"BLV",type:1},
    {id:19,valor:"Barrio",nomenclatura:"BRR",type:1},
    {id:20,valor:"Corregimiento",nomenclatura:"C",type:1},
    {id:21,valor:"Casa",nomenclatura:"CA",type:1},
    {id:22,valor:"Caserio",nomenclatura:"CAS",type:1},
    {id:23,valor:"Centro comercial",nomenclatura:"CC",type:1},
    {id:24,valor:"Ciudadela",nomenclatura:"CD",type:1},
    {id:25,valor:"Célula",nomenclatura:"CEL",type:1},
    {id:26,valor:"Centro",nomenclatura:"CEN",type:1},
    {id:27,valor:"Circular",nomenclatura:"CIR",type:0},
    {id:28,valor:"Calle",nomenclatura:"CL",type:1},
    {id:29,valor:"Callejón",nomenclatura:"CLJ",type:1},
    {id:30,valor:"Camino",nomenclatura:"CN",type:1},
    {id:31,valor:"Conjunto Residencial",nomenclatura:"CON",type:1},
    {id:32,valor:"Conjunto",nomenclatura:"CONJ",type:1},
    {id:33,valor:"Carrera",nomenclatura:"CR",type:1},
    {id:34,valor:"Carretera",nomenclatura:"CRT",type:1},
    {id:35,valor:"Circunvalar",nomenclatura:"CRV",type:0},
    {id:36,valor:"Consultorio",nomenclatura:"CS",type:0},
    {id:37,valor:"Diagonal",nomenclatura:"DG", type:1},
    {id:38,valor:"Depósito",nomenclatura:"DP",type:1},
    {id:39,valor:"Departamento",nomenclatura:"DPTO",type:1},
    {id:40,valor:"Depósito sótano",nomenclatura:"DS",type:1},
    {id:41,valor:"Edificio",nomenclatura:"ED",type:1},
    {id:42,valor:"Entrada",nomenclatura:"EN",type:1},
    {id:43,valor:"Escalera",nomenclatura:"ES",type:1},
    {id:44,valor:"Esquina",nomenclatura:"ESQ",type:0},
    {id:45,valor:"Este",nomenclatura:"ESTE",type:0},
    {id:46,valor:"Etapa",nomenclatura:"ET",type:1},
    {id:47,valor:"Exterior",nomenclatura:"EX",type:0},
    {id:48,valor:"Finca",nomenclatura:"FCA",type:1},
    {id:49,valor:"Garaje",nomenclatura:"GJ",type:0},
    {id:50,valor:"Garaje Sótano",nomenclatura:"GS",type:0},
    {id:51,valor:"Glorieta",nomenclatura:"GT",type:0},
    {id:52,valor:"Hacienda",nomenclatura:"HC",type:1},
    {id:53,valor:"Hangar",nomenclatura:"HG",type:1},
    {id:54,valor:"Interior",nomenclatura:"IN",type:0},
    {id:55,valor:"Inspección de Policía",nomenclatura:"IP",type:1},
    {id:56,valor:"Inspección Departamental",nomenclatura:"IPD",type:1},
    {id:57,valor:"Inspección Municipal",nomenclatura:"IPM",type:1},
    {id:58,valor:"Kilómetro",nomenclatura:"KM",type:2},
    {id:59,valor:"Local",nomenclatura:"LC",type:2},
    {id:60,valor:"Local mezzanine",nomenclatura:"LM",type:2},
    {id:61,valor:"Lote",nomenclatura:"LT",type:1},
    {id:62,valor:"Módulo",nomenclatura:"MD",type:1},
    {id:63,valor:"Mojón",nomenclatura:"MJ",type:1},
    {id:64,valor:"Muelle",nomenclatura:"MLL",type:1},
    {id:65,valor:"Mezzanine",nomenclatura:"MN",type:0},
    {id:66,valor:"Manzana",nomenclatura:"MZ",type:0},
    {id:67,valor:"Vías de nombre común",nomenclatura:"NOMBRE VIA",type:2},
    {id:68,valor:"Norte",nomenclatura:"NORTE",type:0},
    {id:69,valor:"Oriente",nomenclatura:"O",type:0},
    {id:70,valor:"Occidente",nomenclatura:"OCC",type:0},
    {id:71,valor:"Oeste",nomenclatura:"OESTE",type:0},
    {id:72,valor:"Oficina",nomenclatura:"OF",type:2},
    {id:73,valor:"Piso",nomenclatura:"P",type:2},
    {id:74,valor:"Parcela",nomenclatura:"PA",type:1},
    {id:75,valor:"Parque",nomenclatura:"PAR",type:1},
    {id:76,valor:"Predio",nomenclatura:"PD",type:1},
    {id:77,valor:"Penthouse",nomenclatura:"PH",type:2},
    {id:78,valor:"Pasaje",nomenclatura:"PJ",type:1},
    {id:79,valor:"Planta",nomenclatura:"PL",type:1},
    {id:80,valor:"Puente",nomenclatura:"PN",type:1},
    {id:81,valor:"Portería",nomenclatura:"POR",type:2},
    {id:82,valor:"Poste",nomenclatura:"POS",type:0},
    {id:83,valor:"Parqueadero",nomenclatura:"PQ",type:1},
    {id:84,valor:"Paraje",nomenclatura:"PRJ",type:1},
    {id:85,valor:"Paseo",nomenclatura:"PS",type:1},
    {id:86,valor:"Puesto",nomenclatura:"PT",type:1},
    {id:87,valor:"Park Way",nomenclatura:"PW",type:1},
    {id:88,valor:"Round Point",nomenclatura:"RP",type:1},
    {id:89,valor:"Salón",nomenclatura:"SA",type:1},
    {id:90,valor:"Salón Comunal",nomenclatura:"SC",type:1},
    {id:91,valor:"Salida",nomenclatura:"SD",type:1},
    {id:92,valor:"Sector",nomenclatura:"SEC",type:1},
    {id:93,valor:"Solar",nomenclatura:"SL",type:0},
    {id:94,valor:"Super Manzana",nomenclatura:"SM",type:0},
    {id:95,valor:"Semisótano",nomenclatura:"SS",type:0},
    {id:96,valor:"Sótano",nomenclatura:"ST",type:0},
    {id:97,valor:"Suite",nomenclatura:"SUITE",type:1},
    {id:98,valor:"Sur",nomenclatura:"SUR",type:0},
    {id:99,valor:"Terminal",nomenclatura:"TER",type:1},
    {id:100,valor:"Terraplén",nomenclatura:"TERPLN",type:1},
    {id:101,valor:"Torre",nomenclatura:"TO",type:1},
    {id:102,valor:"Transversal",nomenclatura:"TV",type:0},
    {id:103,valor:"Terraza",nomenclatura:"TZ",type:1},
    {id:104,valor:"Unidad",nomenclatura:"UN",type:1},
    {id:105,valor:"Unidad residencial",nomenclatura:"UR",type:1},
    {id:106,valor:"Urbanización",nomenclatura:"URB",type:1},
    {id:107,valor:"Vereda",nomenclatura:"VRD",type:1},
    {id:108,valor:"Variante",nomenclatura:"VTE",type:1},
    {id:109,valor:"Zona franca",nomenclatura:"ZF",type:1},
    {id:110,valor:"Zona",nomenclatura:"ZN",type:1}
  ]

  buildForm(){
    this.form = this.formBuilder.group({
      nomenclatura:['',Validators.required],
      descripcion:['',Validators.required],
      direccion:[this.direccion],
      direccionCompleta:[this.direccionCompleta]
      
    })
  }

  escribirNomenclatura(){
    var index = this.form.value.nomenclatura;
    this.valor = this.listaNomenclaturas[index-1].valor;
    this.nomenclatura = this.listaNomenclaturas[index-1].nomenclatura;
    this.type = this.listaNomenclaturas[index-1].type;
    

  }

  cargarDireccion(){
    this.descripcion = this.form.value.descripcion;
    if(this.form.value.descripcion == null){
      this.descripcion='';
    }
    this.direccion = this.direccion+this.nomenclatura+' '+this.descripcion+' ';   
    this.direccionCompleta = this.direccionCompleta+''+this.valor+' '+this.descripcion+' ';
    this.buildForm()

  }

  cancelar(){
    this.direccionCompleta='';
    this.direccion='';
    this.buildForm();
    this.modalService._hideModal()
  }
  agregarDireccion(){
    alert(this.direccion.toUpperCase())
  }
  enviarMensaje(){
    this.event.emit(this.direccion.toUpperCase())
    
  }
  
 
}
