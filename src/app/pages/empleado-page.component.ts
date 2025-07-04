import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosService } from '../services/empleado.service';
import { EmpleadoFormComponent } from '../components/empleado-form/empleado-form.component';

@Component({
    selector: 'app-empleados',
    standalone: true,
    imports: [CommonModule, EmpleadoFormComponent],
    templateUrl: './empleado-page.component.html', 
})
export class EmpleadosComponent implements OnInit {
    empleados: any[] = [];
    formVisible: boolean = false;
    empleadoSeleccionado: any = null;

    constructor(private empleadosService: EmpleadosService) { }

    ngOnInit(): void {
        this.cargarEmpleados();
    }

    cargarEmpleados(): void {
        this.empleadosService.obtenerEmpleados().subscribe((data) => {
            this.empleados = data;
        });
    }

    mostrarFormulario(): void {
        this.empleadoSeleccionado = null;
        this.formVisible = true;
    }

    guardarEmpleado(empleado: any): void {
        if (empleado.idEmpleado) {
            this.empleadosService.actualizarEmpleado(empleado).subscribe(() => {
                this.cargarEmpleados();
            });
        } else {
            this.empleadosService.crearEmpleado(empleado).subscribe(() => {
                this.cargarEmpleados();
            });
        }

        this.formVisible = false;
    }

    cancelarFormulario(): void {
        this.formVisible = false;
    }

    editarEmpleado(empleado: any): void {
        this.empleadoSeleccionado = { ...empleado };
        this.formVisible = true;
    }

    eliminarEmpleado(idEmpleado: number): void {
        console.log('Intentando eliminar empleado con Id:', idEmpleado);

        this.empleadosService.eliminarEmpleado(idEmpleado).subscribe({
            next: () => {
                console.log('Eliminación exitosa. Recargando lista…');
                this.cargarEmpleados();
            },
            error: (err) => {
                console.error(' Error al eliminar empleado:', err);
                alert('No se pudo eliminar el empleado. Revisa la consola para más detalles.');
            }
        });
    }
  
}
