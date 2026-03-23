import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Service Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'URL Slug',
      description: 'Click "Generate" after typing the title. This must match your folder name in the app directory.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Short Description',
      description: 'A brief summary shown on the homepage.',
    }),
    defineField({
      name: 'icon',
      type: 'string',
      title: 'Icon Name',
      description: 'Exact name of the Lucide icon (e.g., TreeDeciduous, Layers, Footprints).',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Service Image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Page Content',
      description: 'Detailed information for the individual service page.',
      of: [{ type: 'block' }],
    }),
  ],
})