import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PersonasService } from './personas.service';
import { Persona } from './persona.entity';
import { CreatePersonaInput } from './dto/create-persona.input';
import { UpdatePersonaInput } from './dto/update-persona.input';

@Resolver(() => Persona)
export class PersonasResolver {
  constructor(private readonly personasService: PersonasService) {}

  @Mutation(() => Persona)
  createPersona(@Args('createPersonaInput') createPersonaInput: CreatePersonaInput): Promise<Persona> {
    return this.personasService.create(createPersonaInput);
  }

  @Query(() => [Persona], { name: 'personas' })
  findAll(): Promise<Persona[]> {
    return this.personasService.findAll();
  }

  @Query(() => Persona, { name: 'persona' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Persona> {
    return this.personasService.findOne(id);
  }

  @Mutation(() => Persona)
  updatePersona(@Args('updatePersonaInput') updatePersonaInput: UpdatePersonaInput): Promise<Persona> {
    return this.personasService.update(updatePersonaInput.id, updatePersonaInput);
  }

  @Mutation(() => Persona)
  removePersona(@Args('id', { type: () => Int }) id: number): Promise<void> {
    return this.personasService.remove(id);
  }
}
