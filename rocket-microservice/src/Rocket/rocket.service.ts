import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';
import * as countdown from 'countdown';

@Injectable()
export class RocketService {

  constructor(private http: HttpService) {}

  getNextLaunchRemainingTime() {
    return this.http.get('https://api.spacexdata.com/v4/launches/next')
      .pipe(
        map((response) => response.data),
        map((launch) => countdown(new Date(), new Date(launch.date_utc)).toString())
      );
  }
}
