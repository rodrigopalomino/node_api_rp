export interface Cliente {
  // primary key
  codigo_cliente?: string;

  //Campos
  nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
  fecha_nacimiento: string;
  telefono: string;
  email: string;

  // foreing key
  categoria_id: number;
}
