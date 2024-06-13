import { DataTypes, Model } from "sequelize";
import sequelize from "../db/connection";
import { Producto_Categoria as Producto_Categoria_Interface } from "../interface/producto_categoria";
import { Producto } from "./producto";
import { Categoria } from "./categoria";

export interface Producto_Categoria_Model
  extends Model<Producto_Categoria_Interface>,
    Producto_Categoria_Interface {}

export const Producto_Categoria = sequelize.define<Producto_Categoria_Model>(
  "producto_categoria",
  {
    codigo_producto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Producto_Categoria.belongsTo(Producto, {
  foreignKey: "codigo_producto",
});

Producto_Categoria.belongsTo(Categoria, {
  foreignKey: "categoria_id",
});
