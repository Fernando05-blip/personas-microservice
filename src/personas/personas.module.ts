import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonasService } from './personas.service';
import { PersonasResolver } from './personas.resolver';
import { Persona } from './persona.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Persona])],
  providers: [PersonasService, PersonasResolver],
})
export class PersonasModule {}
