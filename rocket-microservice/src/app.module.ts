import { HttpModule, Module } from '@nestjs/common';
import { RocketController } from './Rocket/rocket.controller';
import { RocketService } from './Rocket/rocket.service';

@Module({
  imports: [HttpModule],
  controllers: [RocketController],
  providers: [RocketService],
})
export class AppModule {}
