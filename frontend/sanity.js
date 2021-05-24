import { createClient, createImageUrlBuilder } from "next-sanity"

const config = {
  dataset: "production",
  projectId: '504kkums',
  useCdn: true,
  apiVersion: '2020-05-20'

}

export const urlFor = (source) => createImageUrlBuilder(config).image(source)

export const sanityClient = createClient(config)