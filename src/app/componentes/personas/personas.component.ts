import { Component } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';
import { Personas} from 'src/app/data-models/personas.interface';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  verFormulario:boolean = false;
  listaPersonas: Personas[] | undefined;
  
  constructor(private servicioPersonas: PersonasService, private fb: FormBuilder){}

  formPersonas = this.fb.group({
    
    nombre_apellido: [''],
    email: [''],
    fecha_nacimiento: [''],
    dni: ['']
  })

  ngOnInit(): void {
    this.servicioPersonas.getAll().subscribe(data => this.listaPersonas = data);

    setTimeout(()=> (console.log(this.listaPersonas)), 3000);


  }

  btnAgregarPersona(): void {
    this.verFormulario = true;
  }

  btnCancelar(): void {
    this.verFormulario = false;
  }
}
