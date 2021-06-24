export default {
  name: 'orderSections',
  title: 'Order Sections',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'order',
      title: 'Order',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'section' }
          ]
        }
      ]
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Order Sections'
      }
    }
  }
}