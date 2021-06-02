import { sanityClient, urlFor } from '../../sanity'
import Link from 'next/link'
import styles from '../../styles/Section.module.css'

import Layout from '../../components/Layout'
 
const Section = ({ data }) => {
  console.log(data)
  return (
    <Layout current={data.title}> 
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionHeader}>{data.title}</h2>
        <p className={styles.sectionDescription}>{data.description}</p>
        <div className={styles.sectionModules}>
          <h3 className={styles.moduleHeader}>Learning Modules</h3>
          <ul>
            {data.modules.map(module => (
              <li className={styles.moduleLi} key={module.title}>
                <Link href={`/${data.slug.current}/${module.slug.current}`}>
                  <a>
                  {module.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
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
  const query = `*[_type == 'section' && slug.current == $slug]{
    description,
    icon,
    modules[]->{
      title,
      slug
    },
    slug,
    title
  }`
  const data = await sanityClient.fetch(query, {
    slug: params.sections
  })

  return {
    props: { data: data[0] }
  }
}

export default Section