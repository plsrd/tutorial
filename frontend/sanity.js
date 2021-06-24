import { 
  createClient, 
  createImageUrlBuilder,
  createPortableTextComponent
} from "next-sanity"

import styled from "styled-components"

const config = {
  dataset: "production",
  projectId: '504kkums',
  useCdn: true,
  apiVersion: '2020-05-20'
}

const Gotcha = styled.div`
  background-color: #515e721a;
`
const GotchaHeader = styled.p`
  font-weight: bold;
  padding: 1.5rem 2rem .5rem 2rem;
`

const GotchaText = styled.p`
  padding: 0 2rem 2rem 2rem;
`

export const urlFor = (source) => createImageUrlBuilder(config).image(source)

export const PortableText = createPortableTextComponent({
  ...config,
  serializers: {
    marks: {
      link: ({mark, children}) => {
        const { blank, href } = mark
        return blank ?
          <a href={href} target="_blank" rel="noopener">{children}</a>
          : <a href={href}>{children}</a>
      },
    },
    types: {
      code: props => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
      gotcha: props => (
        <Gotcha>
          <GotchaHeader>Note</GotchaHeader>
          <GotchaText>{props.node.text}</GotchaText>
        </Gotcha>
      )
    }
  },
})

export const sanityClient = createClient(config)