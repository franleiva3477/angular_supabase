import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Personas } from '../data-models/personas.interface';

//Guardo en variables los datos de acceso proporcionados por la API de SUPABASE
let linkApi: string = 'https://thyoerdsjihewxjbrlag.supabase.co/rest/v1/Persona?select=*';
let apiKeySupa: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoeW9lcmRzamloZXd4amJybGFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAwNDY3NTUsImV4cCI6MjAzNTYyMjc1NX0.X8sLamdBPOIh-3Xnv7DvpQItiS1ZSzxYjHG1siNO1GU";
let authorizationSupa: string = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoeW9lcmRzamloZXd4amJybGFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAwNDY3NTUsImV4cCI6MjAzNTYyMjc1NX0.X8sLamdBPOIh-3Xnv7DvpQItiS1ZSzxYjHG1siNO1GU";

//Creo un Objeto headers para enviar las claves de autorización 
const headers = new HttpHeaders({
  apikey: apiKeySupa,
  Authorization: authorizationSupa
}) 

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  //Instanciar la Clase HttpClient como parámetro del constructor
  constructor(private http: HttpClient) { }

  //Método para traer todos los registros de la API
  getAll(){
    //Agrego la interface Persona[] en forma de arreglo especificando el tipo de datos recibido
    return this.http.get<Personas[]>(linkApi, {headers});
  }

}
