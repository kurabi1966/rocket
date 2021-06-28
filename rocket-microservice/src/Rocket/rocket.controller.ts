import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { RocketService } from './rocket.service';

@Controller('rocket')
export class RocketController {
  constructor(private readonly rocketService: RocketService) {}

  @MessagePattern('get-next-launch-remaining-time')
  getNextLaunchRemainingTime(data: any) {
    console.log('Recived a request', data);
    return this.rocketService.getNextLaunchRemainingTime();
  }
}
