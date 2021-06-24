import S from '@sanity/desk-tool/structure-builder'
import { BiMapAlt, BiDetail } from 'react-icons/bi'

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
  S.listItem()
   .title('Learning Path')
   .icon(BiMapAlt)
   .child(
    S.list()
      .title('Learning Path')
      .items([
        S.documentTypeListItem('section'),
        S.documentTypeListItem('module')
      ])
  ),
  S.divider(),
  S.documentTypeListItem('author')
])