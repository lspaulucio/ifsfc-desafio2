import { Injectable } from '@nestjs/common';
import { Route } from './entities/route.entity';

@Injectable()
export class RoutesService {
  private routes: Route[] = [
    {
      title: 'First route',
      startPosition: {
        lat: -15.82331,
        lng: -47.92588,
      },
      endPosition: {
        lat: -15.82327,
        lng: -47.92584,
      },
    },
    {
      title: 'Second route',
      startPosition: {
        lat: -15.82306,
        lng: -47.92553,
      },
      endPosition: {
        lat: -15.82284,
        lng: -47.92522,
      },
    },
    {
      title: 'Third route',
      startPosition: {
        lat: -15.82281,
        lng: -47.92519,
      },
      endPosition: {
        lat: -15.82277,
        lng: -47.92513,
      },
    },
    {
      title: 'Fourth route',
      startPosition: {
        lat: -15.82271,
        lng: -47.92504,
      },
      endPosition: {
        lat: -15.82262,
        lng: -47.92492,
      },
    },
    {
      title: 'Fifth route',
      startPosition: {
        lat: -15.8225,
        lng: -47.92476,
      },
      endPosition: {
        lat: -15.82235,
        lng: -47.92454,
      },
    },
  ];

  async getRoutes() {
    return this.routes;
  }
}
