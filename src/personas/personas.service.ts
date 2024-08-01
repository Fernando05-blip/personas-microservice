import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Persona } from './persona.entity';

@Injectable()
export class PersonasService {
  constructor(
    @InjectRepository(Persona)
    private personasRepository: Repository<Persona>,
  ) {}

  create(persona: Partial<Persona>): Promise<Persona> {
    const nuevaPersona = this.personasRepository.create(persona);
    return this.personasRepository.save(nuevaPersona);
  }

  findAll(): Promise<Persona[]> {
    return this.personasRepository.find();
  }

  findOne(id: number): Promise<Persona> {
    return this.personasRepository.findOneBy({ id });
  }

  async update(id: number, persona: Partial<Persona>): Promise<Persona> {
    await this.personasRepository.update(id, persona);
    return this.personasRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.personasRepository.delete(id);
  }
}
