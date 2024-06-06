import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Producto } from '../entity/Producto';

export class ProductoController {
    static productoRepository = AppDataSource.getRepository(Producto);

    static getAll = async (req: Request, res: Response): Promise<Response> => {
        try {
            const productos = await ProductoController.productoRepository.find();
            console.log('Productos obtenidos correctamente:', productos);
            return res.status(200).json(productos);
        } catch (error) {
            console.error('Error al obtener productos:', error);
            return res.status(500).json({ mensaje: 'Error al obtener productos', error: error.message });
        }
    }

    static create = async (req: Request, res: Response): Promise<Response> => {
        try {
            const producto = ProductoController.productoRepository.create(req.body);
            console.log('Datos del producto recibidos:', req.body);
            const result = await ProductoController.productoRepository.save(producto);
            console.log('Producto guardado correctamente:', result);
            return res.status(201).json(result);
        } catch (error) {
            console.error('Error al guardar producto:', error);
            return res.status(500).json({ mensaje: 'Error al guardar producto', error: error.message });
        }
    }
}
