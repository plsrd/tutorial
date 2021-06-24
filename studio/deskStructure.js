import S from '@sanity/desk-tool/structure-builder'
import { BiMapAlt, BiDetail, BiListOl } from 'react-icons/bi'

export default () =>
S.list()
.title('Base')
.items([
  S.listItem()
  .title('Landing Page')
  .icon(BiDetail)
  .child(
    S.document()
      .schemaType('landingPage')
      .documentId('landingPage')
  ),
  S.divider(),
  S.listItem()
   .title('Learning Path')
   .icon(BiMapAlt)
   .child(
    S.list()
      .title('Learning Path')
      .items([
        S.listItem()
          .title('Master Order')
          .icon(BiListOl)
          .child(
            S.document()
              .schemaType('orderSections')
              .documentId('orderSections')
        ),
        S.divider(),
        S.documentTypeListItem('section'),
        S.documentTypeListItem('module')
      ])
  ),
  S.divider(),
  S.documentTypeListItem('author')
])