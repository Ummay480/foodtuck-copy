import { defineField, defineType } from 'sanity'

const chefSchema= defineType({
  name: 'chef',
  title: 'Chef',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Full name of the chef',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title or role of the chef (e.g., "Head Chef", "Sous Chef")',
    }),
    defineField({
      name: 'experienceYears',
      title: 'Experience Years',
      type: 'number',
      description: 'Number of years the chef has worked',
    }),
    defineField({
      name: 'specialty',
      title: 'Specialty',
      type: 'string',
      description: 'Specialty of the chef (e.g., "BBQ", "Pastry", "Italian Cuisine")',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      description: 'Short bio about the chef',
    }),
    defineField({
      name: 'imageUrl',
      title: 'Image URL',
      type: 'url',
      description: 'URL of the chef\'s profile image',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        defineField({
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
          description: 'Instagram URL for the chef',
        }),
        defineField({
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
          description: 'LinkedIn URL for the chef',
        }),
        defineField({
          name: 'twitter',
          title: 'Twitter',
          type: 'url',
          description: 'Twitter URL for the chef',
        }),
      ],
    }),
  ],
})
export default chefSchema;