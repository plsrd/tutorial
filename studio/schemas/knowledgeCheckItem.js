export default {
  name: 'knowledgeCheckItem',
  title: 'item',
  type: 'object',
  fields: [
    {
      name: 'challenge',
      title: 'Challenge',
      type: 'blockContent'
    },
    {
      name: 'hint',
      title: 'Hint',
      type: 'blockContent',
    }
  ],
  preview: {
    select: {
      title: 'challenge'
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: title[0].children[0].text
      }
    }
  }
}