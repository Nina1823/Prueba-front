import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-empleado-form',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './empleado-form.component.html'
})
export class EmpleadoFormComponent {
    @Input() empleado: any = {}; //  editar
    @Output() formGuardado = new EventEmitter<any>();
    @Output() formCancelado = new EventEmitter<void>();
    
    guardar() {
        this.formGuardado.emit(this.empleado);
    }

    cancelar() {
        this.formCancelado.emit();
    }
    ngOnInit(): void {
        if (!this.empleado) {
            this.empleado = {
                nombre: '',
                correo: ''
            };
        }
    }
}
