import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePersonaInput {
  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  email: string;

  @Field()
  date_of_birth: Date;
}
