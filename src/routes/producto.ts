import { Router } from "express";
import {
  createProducto,
  getProducto,
  getProductos,
} from "../controller/producto";

const router = Router();

router.get("/", getProductos);
router.get("/:codigo_producto", getProducto);
router.post("/create", createProducto);
// router.delete("/delete/:producto_id", deleteProducto);
// router.put("/update", updateProducto);

export { router };

/*
  router.get("/", getProductos);

  ************
  router.get("/:codigo_producto", getProducto);

  ************
  router.post("/create", createProducto);
  Body
  {
    (OBLIGATORIO)
    "nombre":"producto 1", 
    "precio": 15.50,
    "stock": 10,
    
    (OPCIONAL)
    => variaciones del producto 
    "v_variacion":"color,color",
    "v_valor":"rojo,azul",
    "v_precio":"15.50,40.63"
    "v_stock": "19,49"
  } 

*/
