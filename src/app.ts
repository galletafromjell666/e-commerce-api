import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import router from '@/routes';
import { logger } from '@/utils/index';
import dbConnect from '@/config/mongo';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from '@/config/swagger';

const PORT = process.env.PORT ?? 3301;
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
void dbConnect().then(() => logger.info('DB connected'));
const specs = swaggerJSDoc(swaggerOptions);
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true }),
);
app.listen(PORT, () => logger.info(`SERVER RUNNING ON PORT ${PORT}`));
