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
            title: 'externalLink',
            name: 'link',
            type: 'object',
            icon: BiLinkExternal,
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            blockEditor: {
              icon: BiLink
            },
            fields: [
              {
                name: 'reference',
                type: 'reference',
                to: [
                  { type: 'post' },
                  { type: 'module'},
                  { type: 'section' },
                ]
              }
            ]
          }
        ],
      },
    },
    {
      type: 'image',
      options: {hotspot: true},
    },
    {
      type: 'code'
    }
  ],
}