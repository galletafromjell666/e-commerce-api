const config = {
  appenders: {
    console: { type: 'console' },
    file: {
      type: 'file',
      filename: `${__dirname}/logs/app.log`,
      maxLogSize: 10485760,
      backups: 3,
      compress: true,
    },
  },
  categories: {
    default: { appenders: ['console', 'file'], level: 'info' },
  },
};

export default config;
