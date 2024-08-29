import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonasService } from 'src/app/services/personas.service';
import { Personas } from 'src/app/data-models/personas.interface';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  verFormulario = false;
  listaPersonas: Personas[] = [];
  personaEditar: Personas | null = null;

  formPersonas: FormGroup = this.fb.group({
    nombre_apellido: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    fecha_nacimiento: ['', Validators.required],
    dni: ['', Validators.required]
  });

  constructor(private servicioPersonas: PersonasService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.cargarPersonas();
  }

  cargarPersonas(): void {
    this.servicioPersonas.getAll().subscribe(data => this.listaPersonas = data);
  }

  btnAgregarPersona(): void {
    this.verFormulario = true;
    this.personaEditar = null;
    this.formPersonas.reset();
  }

  btnCancelar(): void {
    this.verFormulario = false;
    this.formPersonas.reset();
  }

  agregarPersona(): void {
    if (this.formPersonas.valid) {
      if (this.personaEditar) {
        this.servicioPersonas.updatePersona(this.personaEditar.id, this.formPersonas.value).subscribe(() => {
          this.cargarPersonas();
          this.btnCancelar();
        });
      } else {
        this.servicioPersonas.addPersona(this.formPersonas.value).subscribe(() => {
          this.cargarPersonas();
          this.btnCancelar();
        });
      }
    }
  }

  editarPersona(persona: Personas): void {
    this.personaEditar = persona;
    this.verFormulario = true;
    this.formPersonas.patchValue(persona);
  }

  eliminarPersona(id: number): void {
    if (confirm('¿Está seguro de que desea eliminar esta persona?')) {
      this.servicioPersonas.deletePersona(id).subscribe(() => {
        this.cargarPersonas();
      });
    }
  }
}
