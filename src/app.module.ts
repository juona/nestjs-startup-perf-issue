import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { schema } from './schema';

class DependencyModule {
  static forRoot() {
    return {
      module: DependencyModule,
      providers: [
        {
          provide: 'LOL',
          useValue: schema,
        },
      ],
    };
  }
}

@Module({
  imports: [DependencyModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
