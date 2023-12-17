const options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'basic ecommerce api',
      version: '0.1.0',
      description:
        'This is a basic ecommerce api made with Express and documented with Swagger',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'Giovanni Aguirre',
        email: 'giovanni.aguirrez@hotmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.ts'],
};

export default options;
