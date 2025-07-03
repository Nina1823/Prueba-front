import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-empleado-form',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './empleado-form.component.html',
})
export class EmpleadoFormComponent {
    @Input() empleado: any = {};
    @Output() formCancelado = new EventEmitter<void>();
    @Output() formGuardado = new EventEmitter<any>();

    guardar() {
        this.formGuardado.emit(this.empleado);
    }

    cancelar() {
        this.formCancelado.emit();
    }
}
