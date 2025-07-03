import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoFormComponent } from '../../components/empleado-form/empleado-form.component'; // ajusta si está en otra ruta

@Component({
    selector: 'app-empleados',
    standalone: true,
    imports: [CommonModule, EmpleadoFormComponent],
    templateUrl: './empleados.component.html',
})
export class EmpleadosComponent {
    empleados: any[] = [];
    formVisible: boolean = false;
    empleadoSeleccionado: any = null;

    mostrarFormulario() {
        this.empleadoSeleccionado = null;
        this.formVisible = true;
    }

    guardarEmpleado(empleado: any) {
        const index = this.empleados.findIndex(e => e.id === empleado.id);
        if (index > -1) {
            this.empleados[index] = empleado;
        } else {
            this.empleados.push(empleado);
        }
        this.formVisible = false;
    }

    cancelarFormulario() {
        this.formVisible = false;
    }

    editarEmpleado(empleado: any) {
        this.empleadoSeleccionado = empleado;
        this.formVisible = true;
    }

    eliminarEmpleado(id: any) {
        this.empleados = this.empleados.filter(emp => emp.id !== id);
    }
}
