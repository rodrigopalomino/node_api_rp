import { DataTypes, Model } from "sequelize";
import { Variacion as VariacionInteface } from "../interface/variacion";
import sequelize from "../db/connection";
import { Producto } from "./producto";

export interface VariacionModel
  extends Model<VariacionInteface>,
    VariacionInteface {}

export const Variacion = sequelize.define<VariacionModel>(
  "variacion",
  {
    variacion_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    codigo_producto: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    variacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    valor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.FLOAT(5, 2),
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Variacion.belongsTo(Producto, {
  foreignKey: "codigo_producto",
});
