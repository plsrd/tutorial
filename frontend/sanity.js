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