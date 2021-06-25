export default {
  name: 'knowledgeCheckItem',
  title: 'item',
  type: 'object',
  fields: [
    {
      name: 'challenge',
      title: 'Challenge',
      type: 'string'
    },
    {
      name: 'hint',
      title: 'Hint',
      type: 'blockContent',
    }
  ]
}