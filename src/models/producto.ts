import { DataTypes, Model } from "sequelize";
import { Producto as ProductoInterface } from "../interface/producto";
import sequelize from "../db/connection";
import { Categoria } from "./categoria";

export interface ProductoModel
  extends Model<ProductoInterface>,
    ProductoInterface {}

export const Producto = sequelize.define<ProductoModel>(
  "producto",
  {
    codigo_producto: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.FLOAT(5, 2),
      allowNull: false,
    },
    stock: {
      type: DataTypes.FLOAT(5, 2),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);
