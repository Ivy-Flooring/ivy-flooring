import { type SchemaTypeDefinition } from 'sanity'

import project from './project'
import { homeType } from './home'
import service from './service'
import post from './post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, homeType, service, post],
}