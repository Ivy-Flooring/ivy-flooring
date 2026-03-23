import { defineType, defineField } from 'sanity'
export default defineType({
    name: 'project',
    title: 'Flooring Projects',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Project Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'city',
            title: 'City',
            type: 'string',
            description: 'The city or area where the project was completed (e.g., Nashville, Brentwood)',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'materialType',
            title: 'Material Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Hardwood Flooring', value: 'Hardwood Flooring' },
                    { title: 'Engineered Flooring', value: 'Engineered Flooring' },
                    { title: 'LVP / LVT / Laminate', value: 'LVP / LVT / Laminate' },
                    { title: 'Soundproof Flooring', value: 'Soundproof Flooring' },
                    { title: 'Stair Treads', value: 'Stair Treads' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'gallery',
            title: 'Image Gallery',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                },
            ],
            validation: (Rule) => Rule.required().min(1).error('At least one image is required'),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'city',
            media: 'gallery.0', // Uses the first image in the gallery as preview
        },
    },
})
