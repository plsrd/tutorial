export default {
  name: 'figure',
  title: 'Image',
  type: 'object',
  options: {
    collapsible: true,
  },
  fields: [
    {
      name: 'image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
    {
      name: 'alternativeText',
      title: 'Alternative Text',
      type: 'string',
      validation: Rule => Rule.required()
    }
  ]
}