import { defineField, defineType } from 'sanity'

export const homeType = defineType({
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroImage',
      type: 'image',
      title: 'Main Hero Image',
      options: { hotspot: true } // Allows you to crop the image inside Sanity
    }),
    defineField({
      name: 'heroHeadline',
      type: 'string',
      title: 'Hero Headline'
    }),
  ],
})