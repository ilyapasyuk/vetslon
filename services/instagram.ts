export type Photo = {
  imageUrl: string
  url: string
}

const getPhotos = async (username: string): Promise<Photo[] | undefined> => {
  try {
    const response = await fetch(`/api/getInstagramPhotos?username=${username}`, {
      method: 'GET',
      mode: 'no-cors',
    })

    if (response.ok) {
      return await response.json()
    }
  } catch (error) {
    console.error('Instagram getPhotos error', error)
  }
}

export { getPhotos }
