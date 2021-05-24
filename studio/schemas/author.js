import { BiIdCard } from "react-icons/bi"

export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: BiIdCard,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'What do you do?',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      description: 'Path to profile',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type:'figure',
      validation: Rule => Rule.required()
    },
    {
      name: 'authorDescription',
      title: 'Author Description',
      type: 'text',
      validation: Rule => Rule.required().min(50)
    },
    {
      name: 'contact',
      title: 'Contact',
      type: 'object',
      fields: [
        {name: 'sanity', type: 'string', title: 'Sanity Community Slack'},
        {
          name: 'email', 
          type: 'string', 
          title: 'Email', 
          validation: Rule => Rule.required().custom(email => {
            const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            return email.match(reg) ? true : 'Enter a valid email address'
          })},
        {name: 'github', type: 'url', title: 'Github'},
        {name: 'linkedIn', type: 'url', title: 'LinkedIn'},
        {name: 'twitter', type: 'url', title: 'Twitter'},
      ],
      options: {
        collapsible: true
      }
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'mainImage'
    }
  }
}