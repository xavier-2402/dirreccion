import { Component, OnInit } from '@angular/core';
import { nomenclatura } from './models/nomenclatura';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  {
  
  title = 'direccionTest';

  nomenclatura:string='';
  form:any;
  direccion:string = '';
  

  constructor(private formBuilder: FormBuilder){
    
  }

  ngOnInit(): void {
    this.buildForm();
    
  }
  

  listaNomenclaturas: nomenclatura[]=[
    {id:1,valor:"Avenida Calle",nomenclatura:"AC"},
    {id:2,valor:"Administración",nomenclatura:"AD"},
    {id:3,valor:"Adelante",nomenclatura:"ADL"},
    {id:4,valor:"Aeropuerto",nomenclatura:"AER"},
    {id:5,valor:"Agencia",nomenclatura:"AG"},
    {id:6,valor:"Agrupación",nomenclatura:"AGP"},
    {id:7,valor:"Avenida carrera",nomenclatura:"AK"},
    {id:8,valor:"Altillo",nomenclatura:"AL"},
    {id:9,valor:"Al lado",nomenclatura:"ALD"},
    {id:10,valor:"Almacén",nomenclatura:"ALM"},
    {id:11,valor:"Apartamento",nomenclatura:"AP"},
    {id:12,valor:"Atrás",nomenclatura:"ATR"},
    {id:13,valor:"Autopista",nomenclatura:"AUT"},
    {id:14,valor:"Avenida",nomenclatura:"AV"},
    {id:15,valor:"Anillo vial",nomenclatura:"AVIAL"},
    {id:16,valor:"Bodega",nomenclatura:"BG"},
    {id:17,valor:"Bloque",nomenclatura:"BL"},
    {id:18,valor:"Boulevard",nomenclatura:"BLV"},
    {id:19,valor:"Barrio",nomenclatura:"BRR"},
    {id:20,valor:"Corregimiento",nomenclatura:"C"},
    {id:21,valor:"Casa",nomenclatura:"CA"},
    {id:22,valor:"Caserio",nomenclatura:"CAS"},
    {id:23,valor:"Centro comercial",nomenclatura:"CC"},
    {id:24,valor:"Ciudadela",nomenclatura:"CD"},
    {id:25,valor:"Célula",nomenclatura:"CEL"},
    {id:26,valor:"Centro",nomenclatura:"CEN"},
    {id:27,valor:"Circular",nomenclatura:"CIR"},
    {id:28,valor:"Calle",nomenclatura:"CL"},
    {id:29,valor:"Callejón",nomenclatura:"CLJ"},
    {id:30,valor:"Camino",nomenclatura:"CN"},
    {id:31,valor:"Conjunto Residencial",nomenclatura:"CON"},
    {id:32,valor:"Conjunto",nomenclatura:"CONJUNTO"},
    {id:33,valor:"Carrera",nomenclatura:"CR"},
    {id:34,valor:"Carretera",nomenclatura:"CRT"},
    {id:35,valor:"Circunvalar",nomenclatura:"CRV"},
    {id:36,valor:"Consultorio",nomenclatura:"CS"},
    {id:37,valor:"Diagonal",nomenclatura:"DG"},
    {id:38,valor:"Depósito",nomenclatura:"DP"},
    {id:39,valor:"Departamento",nomenclatura:"DPTO"},
    {id:40,valor:"Depósito sótano",nomenclatura:"DS"},
    {id:41,valor:"Edificio",nomenclatura:"ED"},
    {id:42,valor:"Entrada",nomenclatura:"EN"},
    {id:43,valor:"Escalera",nomenclatura:"ES"},
    {id:44,valor:"Esquina",nomenclatura:"ESQ"},
    {id:45,valor:"Este",nomenclatura:"ESTE"},
    {id:46,valor:"Etapa",nomenclatura:"ET"},
    {id:47,valor:"Exterior",nomenclatura:"EX"},
    {id:48,valor:"Finca",nomenclatura:"FCA"},
    {id:49,valor:"Garaje",nomenclatura:"GJ"},
    {id:50,valor:"Garaje Sótano",nomenclatura:"GS"},
    {id:51,valor:"Glorieta",nomenclatura:"GT"},
    {id:52,valor:"Hacienda",nomenclatura:"HC"},
    {id:53,valor:"Hangar",nomenclatura:"HG"},
    {id:54,valor:"Interior",nomenclatura:"IN"},
    {id:55,valor:"Inspección de Policía",nomenclatura:"IP"},
    {id:56,valor:"Inspección Departamental",nomenclatura:"IPD"},
    {id:57,valor:"Inspección Municipal",nomenclatura:"IPM"},
    {id:58,valor:"Kilómetro",nomenclatura:"KM"},
    {id:59,valor:"Local",nomenclatura:"LC"},
    {id:60,valor:"Local mezzanine",nomenclatura:"LM"},
    {id:61,valor:"Lote",nomenclatura:"LT"},
    {id:62,valor:"Módulo",nomenclatura:"MD"},
    {id:63,valor:"Mojón",nomenclatura:"MJ"},
    {id:64,valor:"Muelle",nomenclatura:"MLL"},
    {id:65,valor:"Mezzanine",nomenclatura:"MN"},
    {id:66,valor:"Manzana",nomenclatura:"MZ"},
    {id:67,valor:"Esquina",nomenclatura:"ESQ"},
    {id:68,valor:"Vías de nombre común",nomenclatura:"NOMBRE VIA"},
    {id:69,valor:"Norte",nomenclatura:"NORTE"},
    {id:70,valor:"Oriente",nomenclatura:"O"},
    {id:71,valor:"Occidente",nomenclatura:"OCC"},
    {id:72,valor:"Oeste",nomenclatura:"OESTE"},
    {id:73,valor:"Oficina",nomenclatura:"OF"},
    {id:74,valor:"Piso",nomenclatura:"P"},
    {id:75,valor:"Parcela",nomenclatura:"PA"},
    {id:76,valor:"Parque",nomenclatura:"PAR"},
    {id:77,valor:"Predio",nomenclatura:"PD"},
    {id:78,valor:"Penthouse",nomenclatura:"PH"},
    {id:79,valor:"Pasaje",nomenclatura:"PJ"},
    {id:80,valor:"Planta",nomenclatura:"PL"},
    {id:81,valor:"Puente",nomenclatura:"PN"},
    {id:82,valor:"Portería",nomenclatura:"POR"},
    {id:83,valor:"Poste",nomenclatura:"POS"},
    {id:84,valor:"Parqueadero",nomenclatura:"PQ"},
    {id:85,valor:"Paraje",nomenclatura:"PRJ"},
    {id:86,valor:"Paseo",nomenclatura:"PS"},
    {id:87,valor:"Puesto",nomenclatura:"PT"},
    {id:88,valor:"Park Way",nomenclatura:"PW"},
    {id:89,valor:"Round Point",nomenclatura:"RP"},
    {id:90,valor:"Salón",nomenclatura:"SA"},
    {id:91,valor:"Salón Comunal",nomenclatura:"SC"},
    {id:92,valor:"Salida",nomenclatura:"SD"},
    {id:93,valor:"Sector",nomenclatura:"SEC"},
    {id:94,valor:"Solar",nomenclatura:"SL"},
    {id:95,valor:"Super Manzana",nomenclatura:"SM"},
    {id:96,valor:"Semisótano",nomenclatura:"SS"},
    {id:97,valor:"Sótano",nomenclatura:"ST"},
    {id:98,valor:"Suite",nomenclatura:"SUITE"},
    {id:99,valor:"Sur",nomenclatura:"SUR"},
    {id:100,valor:"Terminal",nomenclatura:"TER"},
    {id:101,valor:"Terraplén",nomenclatura:"TERPLN"},
    {id:102,valor:"Torre",nomenclatura:"TO"},
    {id:103,valor:"Transversal",nomenclatura:"TV"},
    {id:104,valor:"Terraza",nomenclatura:"TZ"},
    {id:105,valor:"Unidad",nomenclatura:"UN"},
    {id:106,valor:"Unidad residencial",nomenclatura:"UR"},
    {id:107,valor:"Urbanización",nomenclatura:"URB"},
    {id:108,valor:"Vereda",nomenclatura:"VRD"},
    {id:109,valor:"Variante",nomenclatura:"VTE"},
    {id:110,valor:"Zona franca",nomenclatura:"ZF"},
    {id:111,valor:"Zona",nomenclatura:"ZN"}
  ]

  buildForm(){
    this.form = this.formBuilder.group({
      nomenclatura:['',Validators.required],
      descripcion:['',Validators.required]
    })
  }

  escribirNomenclatura(event:Event){
    event?.preventDefault();
    console.log(this.form.value.nomenclatura)
    this.nomenclatura = this.form.value.nomenclatura
  }

  cargarDireccion(){
    this.direccion = this.direccion+this.nomenclatura+' '+this.form.value.descripcion+' ';
    console.log(this.direccion)
    this.buildForm()

  }
}
