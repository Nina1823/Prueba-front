// empleados.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmpleadosService {
    private apiUrl = 'http://localhost:5000/api/empleados'; // cambia si tu backend usa otro puerto

    constructor(private http: HttpClient) { }

    obtenerEmpleados(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }

    crearEmpleado(empleado: any): Observable<any> {
        return this.http.post(this.apiUrl, empleado);
    }

    actualizarEmpleado(empleado: any): Observable<any> {
        return this.http.put(`${this.apiUrl}/${empleado.id}`, empleado);
    }

    eliminarEmpleado(id: any): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
