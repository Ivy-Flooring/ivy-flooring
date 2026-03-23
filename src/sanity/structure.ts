import type {StructureBuilder} from 'sanity/structure'

export const structure: (S: StructureBuilder) => ReturnType<StructureBuilder['getStructure']> = (S) =>
  S.list()
    .title('Ivy Flooring Content')
    .items([
      // We removed 'post', 'author', and 'category' because they were causing the crash
      S.documentTypeListItem('project').title('Flooring Projects'), 
      
      // This part catches anything else you might add later
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['project'].includes(item.getId()!)
      ),
    ])
