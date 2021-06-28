import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

(async () => {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  const microserviceOptions = {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 8877
    }
  }
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
  app.listen(
    () => {
      console.log(`Microservice is listening on port ${microserviceOptions.options.port}`);
    }
  ) 
})();
