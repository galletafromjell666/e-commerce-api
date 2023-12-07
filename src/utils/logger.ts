import { configure, getLogger } from 'log4js';
import * as path from 'path';

configure({
  appenders: {
    console: { type: 'console' },
    file: {
      type: 'file',
      filename: `${path.join(__dirname, '../..', 'logs', 'server.log')}`,
      maxLogSize: 10485760,
      backups: 3,
      compress: true,
    },
  },
  categories: {
    default: { appenders: ['console', 'file'], level: 'info' },
  },
});

const logger = getLogger();

export default logger;
