import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosService } from 'src/app/services/empleado.service';
import { EmpleadoFormComponent } from '../../components/empleado-form/empleado-form.component';

@Component({
    selector: 'app-empleados',
    standalone: true,
    imports: [CommonModule, EmpleadoFormComponent],
    templateUrl: './empleados.component.html',
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
        this.empleadosService.obtenerEmpleados().subscribe(data => {
            this.empleados = data;
        });
    }

    mostrarFormulario() {
        this.empleadoSeleccionado = null;
        this.formVisible = true;
    }

    guardarEmpleado(empleado: any) {
        if (empleado.id) {
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

    cancelarFormulario() {
        this.formVisible = false;
    }

    editarEmpleado(empleado: any) {
        this.empleadoSeleccionado = { ...empleado };
        this.formVisible = true;
    }

    eliminarEmpleado(id: number) {
        this.empleadosService.eliminarEmpleado(id).subscribe(() => {
            this.cargarEmpleados();
        });
    }
}
