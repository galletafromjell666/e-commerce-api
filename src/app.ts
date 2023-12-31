import express from 'express';
import cors from 'cors';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import 'dotenv/config';
import dbConnect from '@/config/mongo';
import router from '@/routes';
import { logger } from '@/utils/index';
import swaggerOptions from '@/config/swagger';
import unhandledErrorMiddleware from './middlewares/unhandledError.middleware';

const PORT = process.env.PORT ?? 3301;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/v1', router);
void dbConnect().then(() => logger.info('DB connected'));

app.use(unhandledErrorMiddleware);

// TODO: finish the docs xd
const specs = swaggerJSDoc(swaggerOptions);
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true }),
);
app.listen(PORT, () => logger.info(`SERVER RUNNING ON PORT ${PORT}`));
