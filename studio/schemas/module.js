import { BiCodeBlock } from 'react-icons/bi'

export default {
  name: 'module',
  title: 'Module',
  type: 'document',
  icon: BiCodeBlock,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'introduction',
      title: 'Introduction',
      description: 'Brief introduction to module',
      type: 'blockContent',
      validation: Rule => Rule.required()
    },
    {
      name: 'learningOutcomes',
      title: 'Learning Outcomes',
      description: '1 sentence descriptions',
      type: 'array',
      of: [
        { 
          type: 'string',
          validation: Rule => Rule.required().min(10).max(150)
        }
      ],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'lessonPlan',
      title: 'Lesson Plan',
      description: 'Module content, broken into individual components',
      type: 'array',
      of: [
        {
          name: 'lessonComponent',
          title: 'Lesson Component',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string'
            },
            {
              name: 'content',
              title: 'Content',
              type: 'blockContent'
            }
          ]
        }
      ],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'additionalResources',
      title: 'Additional Resources',
      description: 'Snippets of info with links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url'
            }
          ]
        }
      ]
    }
  ]
}