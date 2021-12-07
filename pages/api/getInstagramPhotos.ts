import type { NextApiRequest, NextApiResponse } from 'next'

type Photo = {
  imageUrl: string
  url: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Photo[] | { error: unknown; url: string }>,
) {
  const url: string = `https://www.instagram.com/${req.query.username}/?__a=1`

  try {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'no-cors',
    })

    if (response.ok) {
      const userData = await response.json()
      console.log('userData', userData)

      const isPhotosExist: boolean = Boolean(
        userData?.graphql?.user?.edge_owner_to_timeline_media?.edges?.length,
      )

      if (isPhotosExist) {
        const photos: Photo[] = userData?.graphql.user.edge_owner_to_timeline_media.edges.map(
          (photo: {
            node: {
              shortcode: any
              thumbnail_src: string
            }
          }) => {
            return {
              imageUrl: photo?.node.thumbnail_src,
              url: `https://www.instagram.com/p/${photo?.node.shortcode}/`,
            }
          },
        )

        console.log('photos', photos)

        res.status(200).json(photos)
      }
    }
  } catch (error) {
    res.status(400).json({ error: error, url: url })
  }
}
