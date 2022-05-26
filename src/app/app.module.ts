import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { ModalTestComponent } from './components/modal-test/modal-test.component';
import { ModalFuncionalidadComponent } from './components/modal-funcionalidad/modal-funcionalidad.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DireccionModule } from './modules/direccion/direccion.module';

@NgModule({
  declarations: [
    AppComponent,
    ModalTestComponent,
    ModalFuncionalidadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    DireccionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
