import { Request, Response } from "express";
import {
  _createProducto,
  _getProducto,
  _getProductos,
} from "../service/producto";
import { Producto } from "../interface/producto";
import { Variacion } from "../interface/variacion";

export const createProducto = async (req: Request, res: Response) => {
  const { nombre, precio, stock, v_variacion, v_valor, v_precio, v_stock } =
    req.body;

  const newProducto: Producto = {
    nombre,
    precio,
    stock,
  };

  let variaciones: Variacion[] = [];

  if (v_variacion && v_valor && v_precio && v_stock) {
    const arrayVariacion = v_variacion.split(",");
    const arrayValor = v_valor.split(",");
    const arrayPrecio = v_precio.split(",");
    const arrayStock = v_stock.split(",");

    for (let i = 0; i < arrayVariacion.length; i++) {
      const newVariacion: Variacion = {
        variacion: arrayVariacion[i],
        valor: arrayValor[i],
        precio: parseFloat(arrayPrecio[i]),
        stock: parseInt(arrayStock[i]),
      };
      variaciones.push(newVariacion);
    }
  }

  try {
    const response = await _createProducto(newProducto, variaciones);
    res.status(response.status).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getProductos = async (req: Request, res: Response) => {
  try {
    const response = await _getProductos();
    res.status(response.status).json(response.items);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getProducto = async (req: Request, res: Response) => {
  const { codigo_producto } = req.params;

  try {
    const response = await _getProducto(codigo_producto);
    res.status(response.status).json(response.item);
  } catch (error) {
    res.status(400).json(error);
  }
};
