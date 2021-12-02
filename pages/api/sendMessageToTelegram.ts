import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('req.query', req.query)

  try {
    const response = await fetch(
      encodeURI(
        `https://api.telegram.org/bot2139717915:AAEyxW1i0EcrokWoktNDJHP-Jouyk9FxnVI/sendMessage?chat_id=-1001515621014&text=${req.query.text}&parse_mode=${req.query.parse_mode}`,
      ),
    )

    if (response.ok) {
      res.status(200).json({ message: 'success sent' })
    }
  } catch (error) {
    res.status(400).json({ error: error })
  }
}
