import S from '@sanity/desk-tool/structure-builder'
import { BiColumns, BiMapAlt } from 'react-icons/bi'

export default () =>
S.list()
.title('Base')
.items([
  S.listItem()
    .title('Blog')
    .icon(BiColumns)
    .child(
      S.list()
        .title('Blog Documents')
        .items([
          S.documentTypeListItem('post'),
          S.documentTypeListItem('author')
        ])
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
])