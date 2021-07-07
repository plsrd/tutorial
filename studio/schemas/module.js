import { BiCodeBlock } from 'react-icons/bi'
const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: '504kkums',
  dataset: 'production',
  apiVersion: '2021-06-29', // use current UTC date - see "specifying API version"!
  token: '', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})

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
      name: 'parentSection',
      title: 'Parent Section',
      type: 'reference',
      to: {type: 'section'}
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
      name: 'knowledgeCheck',
      title: 'Knowledge Check',
      description: 'Add challenges and hints to check content comprehension here',
      type: 'array',
      of: [{ type: 'knowledgeCheckItem' }]
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
  ],
  orderings: [
    {
      title: 'Section',
      name: 'sectionAsc',
      by: [
        {field: 'parentSection', direction: 'asc'}
      ]
    },
  ],
  preview: {
    select: {
      title: 'title',
      parent: 'parentSection.title'
    },
    prepare({ title, parent }) {
      
      return {
        title: title,
        subtitle: parent ? parent: ''
      }
    }
  }
}