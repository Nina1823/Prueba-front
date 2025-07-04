import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmpleadosService {
    private apiUrl = 'http://localhost:5247/api/Empleados';

    constructor(private http: HttpClient) { }

    obtenerEmpleados(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }

    crearEmpleado(empleado: any): Observable<any> {
        return this.http.post(this.apiUrl, empleado, {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        });
    }

    actualizarEmpleado(empleado: any): Observable<any> {
        return this.http.put(`${this.apiUrl}/${empleado.idEmpleado}`, empleado, {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        });
    }

    eliminarEmpleado(idEmpleado: number): Observable<any> {
        const url = `${this.apiUrl}/${idEmpleado}`;
        console.log(`DELETE → ${url}`);
        return this.http.delete(url);
      }
}
