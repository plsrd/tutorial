// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import author from './author'
import section from './section'
import module from './module'
import figure from './figure'
import blockContent from './blockContent'
import landingPage from './landingPage'
import orderSections from './orderSections'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    figure, 
    author,
    module,
    section,
    blockContent,
    landingPage,
    orderSections
  ]),
})
