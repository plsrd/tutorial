import { sanityClient, urlFor } from '../../sanity'
import styles from '../../styles/Learn.module.css'

import Layout from '../../components/Layout'
 
const Section = ({ data }) => {

  return (
    <Layout current={data.title}> 

    </Layout>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == 'section' && defined(slug.current)][].slug.current`
  const paths = await sanityClient.fetch(query)

  return {
    paths: paths.map(sections => ({ params: { sections } })),
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const query = `*[_type == 'section' && slug.current == $slug]`
  const data = await sanityClient.fetch(query, {
    slug: params.sections
  })

  return {
    props: { data: data[0] }
  }
}



// export const getServerSideProps = async context => {
//   const slug = context.query.sections
//   console.log(slug)
//   const query = `*[_type == 'section' && slug.current == $slug][0]{
//   title,
//   description,
//   icon, 
//   modules[]->
//   }`

//   const section = await sanityClient.fetch(query, { slug })

//   if (! section) {
//     return {
//       props: {
//         section: [],
//       }
//     }
//   } else {
//     return {
//       props: {
//         section,
//       }
//     }
//   }
// }

//getStaticPaths { slugs }

//getStaticProps { page content }

export default Section