import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFuncionalidadComponent } from './modal-funcionalidad.component';

describe('ModalFuncionalidadComponent', () => {
  let component: ModalFuncionalidadComponent;
  let fixture: ComponentFixture<ModalFuncionalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFuncionalidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFuncionalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
