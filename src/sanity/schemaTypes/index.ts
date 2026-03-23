import { type SchemaTypeDefinition } from 'sanity'

import project from './project'
import { homeType } from './home'
import service from './service' // 1. Add this line

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, homeType, service], // 2. Add 'service' here
}