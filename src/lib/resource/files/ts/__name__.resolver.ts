import { UseGuards } from '@nestjs/common'
import { Args, ID, Mutation, Resolver } from '@nestjs/graphql'
import { Filter, UpdateManyResponse } from '@nestjs-query/core'
import { CRUDResolver, FilterType, UpdateManyResponseType } from '@nestjs-query/query-graphql'
import { GQLAuthGuard } from '../auth/auth.guard'
import { <%= singular(classify(name)) %> } from './entities/<%= singular(name) %>.entity'
import { Create<%= singular(classify(name)) %>Input } from './dto/create-<%= singular(name) %>.input'
import { Update<%= singular(classify(name)) %>Input } from './dto/update-<%= singular(name) %>.input'
import { <%= classify(name) %>Service } from './<%= name %>.service'

const guards = [GQLAuthGuard]

@Resolver(() => <%= singular(classify(name)) %>)
export class <%= classify(name) %>Resolver extends CRUDResolver(<%= singular(classify(name)) %>, {
  CreateDTOClass: Create<%= singular(classify(name)) %>Input,
  UpdateDTOClass: Update<%= singular(classify(name)) %>Input,
  read: { guards },
  create: { guards },
  update: { guards },
  delete: { guards },
}) {
  constructor(readonly service: <%= classify(name) %>Service) {
    super(service)
  }

  /**
   * Restore an entity by resetting its deletedAt column to null.
   */
  @UseGuards(...guards)
  @Mutation(() => <%= singular(classify(name)) %>)
  restoreOne<%= singular(classify(name)) %>(@Args('input', { type: () => ID }) id: string): Promise<<%= singular(classify(name)) %>> {
    return this.service.restoreOne(id)
  }

  /**
   * Restore multiple entities by resetting their deletedAt column to null.
   */
  @UseGuards(...guards)
  @Mutation(() => UpdateManyResponseType())
  restoreMany<%= classify(name) %>(
    @Args('input', { type: () => FilterType(<%= singular(classify(name)) %>) }) filter: Filter<<%= singular(classify(name)) %>>
  ): Promise<UpdateManyResponse> {
    return this.service.restoreMany(filter)
  }
}
