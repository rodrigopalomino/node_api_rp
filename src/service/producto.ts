import { Producto as ProductoInterface } from "../interface/producto";
import { Variacion as VariacionInterface } from "../interface/variacion";
import { Producto } from "../models/producto";
import { Variacion } from "../models/variacion";

export const _createProducto = async (
  producto: ProductoInterface,
  variaciones?: VariacionInterface[]
) => {
  try {
    const numero = await Producto.count();
    const codigo = `p-${numero + 1}`;

    producto.codigo_producto = codigo;
    await Producto.create(producto);

    if (variaciones && variaciones.length > 0) {
      for (const variacion of variaciones) {
        variacion.codigo_producto = codigo;
        await Variacion.create(variacion);
      }
      return {
        msg: "producto con variaciones creado",
        succes: true,
        status: 200,
      };
    } else {
      return {
        msg: "producto creado",
        succes: true,
        status: 200,
      };
    }
  } catch (error) {
    console.log(error);

    return {
      msg: "error _createProducto",
      succes: false,
      status: 400,
    };
  }
};

export const _getProductos = async () => {
  try {
    const items = await Producto.findAll({ order: ["createdAt"] });

    return {
      items,
      succes: true,
      status: 200,
    };
  } catch (error) {
    return {
      msg: "error _getProductos",
      succes: true,
      status: 200,
    };
  }
};

export const _getProducto = async (codigo_producto: string) => {
  try {
    const item = await Producto.findOne({
      where: { codigo_producto: codigo_producto },
    });

    const variaciones = await Variacion.findAll({
      where: { codigo_producto: codigo_producto },
    });

    return {
      item:
        variaciones.length > 0 ? { ...item?.dataValues, variaciones } : item,
      succes: true,
      status: 200,
    };
  } catch (error) {
    return {
      msg: "error _getProducto",
      succes: false,
      status: 400,
    };
  }
};
