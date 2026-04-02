import {defineField, defineType} from 'sanity'

// schemaTypes/navbarTypes.ts

export const navbarType = defineType({
  name: 'navbar',
  title: 'Element nawigacji',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Etykieta',
      type: 'string',
      //validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Adres URL',
      type: 'string',
      description: 'Np. /kontakt lub https://google.com',
      //validation: (Rule) => Rule.required(),
    }),
  ],
})
