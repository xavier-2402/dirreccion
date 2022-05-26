import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DireccionComponent } from './direccion.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    DireccionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormsModule
  ],
  exports:[
    DireccionComponent
  ]
})
export class DireccionModule { }
