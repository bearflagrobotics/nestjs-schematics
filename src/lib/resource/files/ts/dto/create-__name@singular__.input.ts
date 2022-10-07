import { InputType, Field, Int } from '@nestjs/graphql';
import { IsOptional, IsString, IsInt, IsPositive } from 'class-validator';

@InputType()
export class Create<%= singular(classify(name)) %>Input {
  @IsOptional()
  @IsInt()
  @IsPositive()
  @Field(() => Int, { description: 'Example field (placeholder)', nullable: true })
  exampleField1?: number;

  @IsString()
  @Field()
  exampleField2!: string;
}
