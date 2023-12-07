import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import router from '@/routes';
import { logger } from '@/utils/index';
import dbConnect from '@/config/mongo';

const PORT = process.env.PORT ?? 3301;
const app = express();
app.use(cors());
app.use(express.json());
app.use('api/v1/', router);
void dbConnect().then(() => logger.info('DB connected'));
app.listen(PORT, () => logger.info(`SERVER RUNNING ON PORT ${PORT}`));
