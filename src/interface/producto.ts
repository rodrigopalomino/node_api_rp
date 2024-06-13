export interface Producto {
  //Primary key
  codigo_producto?: string;

  nombre: string;
  precio: number;
  stock: number;

  // createdAt?: Date;
  // updatedAt?: Date;
}
