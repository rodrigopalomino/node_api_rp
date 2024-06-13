export interface Variacion {
  // Primary key
  variacion_id?: number;

  // Foreing key
  codigo_producto?: string;

  variacion: string; //Valores => talla, color, material
  valor: string;
  precio: number;
  stock: number;
}
