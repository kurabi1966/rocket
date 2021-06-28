import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';
import * as countdown from 'countdown';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class RocketService {
  client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 8877
      }
    });
  }

  getNextLaunchRemainingTime(data: {name: string, age: number}) {
    return this.client
      .send<string, {name: string, age: number}>(
        'get-next-launch-remaining-time', data
      );
  }
  // constructor(private http: HttpService) {}

  // getNextLaunchRemainingTime() {
  //   return this.http.get('https://api.spacexdata.com/v4/launches/next')
  //     .pipe(
  //       map((response) => response.data),
  //       map((launch) => countdown(new Date(), new Date(launch.date_utc)).toString())
  //     );
  // }
}
