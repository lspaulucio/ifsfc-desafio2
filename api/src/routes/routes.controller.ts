import { Controller,  Get} from '@nestjs/common';
import { Route } from './entities/route.entity';
import { RoutesService } from './routes.service';

@Controller('routes')
export class RoutesController {
    constructor(private routesService: RoutesService){}
    
  @Get()
  async getRoutes(): Promise<Route[]>{
      return this.routesService.getRoutes()
  }

}
