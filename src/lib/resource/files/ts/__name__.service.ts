import { Repository, DeepPartial } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { QueryService } from '@nestjs-query/core'
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm'
import { <%= singular(classify(name)) %> } from './entities/<%= singular(name) %>.entity'

@QueryService(<%= singular(classify(name)) %>)
export class <%= classify(name) %>Service extends TypeOrmQueryService<<%= singular(classify(name)) %>> {
  constructor(@InjectRepository(<%= singular(classify(name)) %>) repo: Repository<<%= singular(classify(name)) %>>) {
    super(repo, { useSoftDelete: true })
  }

  /**
   * Create or update the entity depending on if its primary ID already exists.
   */
  async saveOne(<%= singular(camelize(name)) %>: DeepPartial<<%= singular(classify(name)) %>>) {
    return this.repo.save(<%= singular(camelize(name)) %>)
  }
}
