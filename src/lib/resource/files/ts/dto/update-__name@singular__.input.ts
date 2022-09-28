import { InputType, PartialType } from '@nestjs/graphql'
import { Create<%= singular(classify(name)) %>Input } from './create-<%= singular(name) %>.input'

@InputType()
export class Update<%= singular(classify(name)) %>Input extends PartialType(Create<%= singular(classify(name)) %>Input) {}
