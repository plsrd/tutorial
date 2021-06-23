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

const A = styled.a`
  color: #1e63d0;
`

const Gotcha = styled.div`
  background-color: #515e721a;
`

export const urlFor = (source) => createImageUrlBuilder(config).image(source)

export const PortableText = createPortableTextComponent({
  ...config,
  serializers: {
    marks: {
      link: ({mark, children}) => {
        const { blank, href } = mark
        return blank ?
          <A href={href} target="_blank" rel="noopener">{children}</A>
          : <A href={href}>{children}</A>
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
          <p>Note</p>
          <p>{props.node.text}</p>
        </Gotcha>
      )
    }
  },
})

export const sanityClient = createClient(config)