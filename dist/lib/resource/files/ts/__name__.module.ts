import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql'
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm'
import { <%= singular(classify(name)) %> } from './entities/<%= singular(name) %>.entity'
import { Create<%= singular(classify(name)) %>Input } from './dto/create-<%= singular(name) %>.input'
import { Update<%= singular(classify(name)) %>Input } from './dto/update-<%= singular(name) %>.input'
import { <%= classify(name) %>Service } from './<%= name %>.service'
import { <%= classify(name) %>Resolver } from './<%= name %>.resolver'

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([<%= singular(classify(name)) %>])],
      services: [<%= classify(name) %>Service],
      dtos: [
        {
          DTOClass: <%= singular(classify(name)) %>,
          CreateDTOClass: Create<%= singular(classify(name)) %>Input,
          UpdateDTOClass: Update<%= singular(classify(name)) %>Input,
        },
      ],
    }),
  ],
  providers: [<%= classify(name) %>Service, <%= classify(name) %>Resolver],
  exports: [<%= classify(name) %>Service],
})
export class <%= classify(name) %>Module {}
