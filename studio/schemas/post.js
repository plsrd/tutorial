import { BiBookContent } from "react-icons/bi"

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: BiBookContent,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Shorter titles are better'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Generated from Title field',
      options: {
        source: 'title',
        maxLength: 40,
      }
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'figure'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'tags'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'image'},
        {type: 'code'}
      ]
    }
  ]
}