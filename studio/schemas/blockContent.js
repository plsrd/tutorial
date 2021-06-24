import React from 'react'
import { BiLink, BiLinkExternal } from 'react-icons/bi'

const highlightRender = props => (
  <span style={{ backgroundColor: 'cyan' }}>{props.children}</span>
)

export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      marks: {
        decorators: [
            { title: 'Strong', value: 'strong' },
            { title: 'Emphasis', value: 'em' },
            { title: 'Code', value: 'code' },
            { title: 'Highlight', 
              value: 'highlight',
              blockEditor: {
                icon: () => 'H',
                render: highlightRender
              }  
            }
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'External link',
            icon: BiLink,
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL'
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                description: 'Read https://css-tricks.com/use-target_blank/',
                type: 'boolean'
              }
            ]
          },

        ],
      },
    },
    {
      type: 'image',
      options: {hotspot: true},
    },
    {
      type: 'code'
    },
    {
      name: 'gotcha',
      title: 'Gotcha',
      type: 'object',
      fields: [
        {
          title: 'Text',
          name: 'text',
          type: 'text'
        }
      ]
    }
  ],
}