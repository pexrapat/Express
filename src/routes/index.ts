import { Router } from 'express';
import productRoute  from './product.route';
const routes = Router();

routes.use('/products', productRoute);

export default routes;