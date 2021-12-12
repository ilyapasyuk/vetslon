import { CONFIG } from 'CONFIG'
import algoliasearch from 'algoliasearch'

import { ClientServiceType } from 'services/services'

const client = algoliasearch(CONFIG.algoliaAppId, CONFIG.algoliaAdminAPIKey)
const servicesInAlgolia = client.initIndex(CONFIG.algoliaIndexName)

const updateAlgoliaIndexes = async (record: ClientServiceType[]) => {
  const preparedRecords = record.map(record => ({ ...record, objectID: record.id }))
  servicesInAlgolia.saveObjects(preparedRecords).then(({ objectIDs }) => {
    console.log(objectIDs)
  })
}

const createAlgoliaObject = async (record: ClientServiceType) => {
  servicesInAlgolia.saveObject(record)
}

const search = async (query: string): Promise<ClientServiceType[]> => {
  const results = await servicesInAlgolia.search(query)

  // @ts-ignore
  return results.hits
}

export { updateAlgoliaIndexes, createAlgoliaObject, search }
