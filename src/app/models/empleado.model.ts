export interface Empleado {
    idEmpleado: number;
    nombre: string;
    correo: string;
    cargo?: string;
    departamento?: string;
    telefono?: string;
    fechaIngreso: string;
    activo: boolean;
}
  