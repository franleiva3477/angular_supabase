import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personas } from '../data-models/personas.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  // Aquí la URL ya incluye la `apiKey`
  private baseUrl: string = 'https://thyoerdsjihewxjbrlag.supabase.co/rest/v1/Persona?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoeW9lcmRzamloZXd4amJybGFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAwNDY3NTUsImV4cCI6MjAzNTYyMjc1NX0.X8sLamdBPOIh-3Xnv7DvpQItiS1ZSzxYjHG1siNO1GU';

  private headers = new HttpHeaders({
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoeW9lcmRzamloZXd4amJybGFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAwNDY3NTUsImV4cCI6MjAzNTYyMjc1NX0.X8sLamdBPOIh-3Xnv7DvpQItiS1ZSzxYjHG1siNO1GU',
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {}

  // Método GET para obtener todas las personas
  getAll(): Observable<Personas[]> {
    return this.http.get<Personas[]>(`${this.baseUrl}&select=*`, { headers: this.headers });
  }

  // Método POST para agregar una nueva persona
  addPersona(persona: Personas): Observable<Personas> {
    return this.http.post<Personas>(this.baseUrl, persona, { headers: this.headers });
  }

  // Método PATCH para actualizar una persona existente
  updatePersona(id: number, persona: Personas): Observable<Personas> {
    return this.http.patch<Personas>(`${this.baseUrl}&id=eq.${id}`, persona, { headers: this.headers });
  }

  // Método DELETE para eliminar una persona
  deletePersona(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}&id=eq.${id}`, { headers: this.headers });
  }
}
