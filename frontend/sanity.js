import { 
  createClient, 
  createImageUrlBuilder,
  createPortableTextComponent
} from "next-sanity"

const config = {
  dataset: "production",
  projectId: '504kkums',
  useCdn: true,
  apiVersion: '2020-05-20'

}

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
      }
    },
    types: {
      code: props => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
      gotcha: props => (
        <div>
          <p>Note</p>
          <p>{props.node.text}</p>
        </div>
      )
    }
  },
})

export const sanityClient = createClient(config)