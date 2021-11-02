import { Client, LogLevel } from '@notionhq/client'
import { CONFIG } from 'CONFIG'

const notion = new Client({
  auth: 'secret_GwSWhXFoCtXfFhc65uz2mJS3jcTdUoesltjQJ24Ar7l',
  logLevel: LogLevel.DEBUG,
})

export interface IGlobalInfo {
  appName: string
  phoneNumber: string
  slogan: string
  email: string
}

const getDatabase = async (databaseId: string) => {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    })

    const countOfProperties: number = response.results.length

    let properties: IGlobalInfo = {
      appName: CONFIG.appName,
      email: CONFIG.email,
      phoneNumber: CONFIG.phoneNumber,
      slogan: CONFIG.slogan,
    }

    if (countOfProperties > 0) {
      response.results.forEach(property => {
        // @ts-ignore
        properties[property.properties.key.title[0].plain_text] =
          // @ts-ignore
          property.properties.value.rich_text[0].plain_text
      })
    }
    return properties
  } catch (error) {
    console.error('error', error)
  }
}

export { getDatabase }
