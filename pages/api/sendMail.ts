import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const userData = JSON.parse(req.body)
  console.log('userData', userData)

  const nodemailer = require('nodemailer')

  const transporter = nodemailer.createTransport({
    port: 587,
    host: process.env.MAIL_CLIENT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWD,
    },
    secure: false,
  })

  const mailData = {
    from: process.env.SEND_FROM,
    to: process.env.SEND_TO,
    subject: `Message From ${userData.email}`,
    text: 'Заявка на парковку',
    // html: `<div>dateIn: ${userData.dateIn}</div><p>dateOut: ${userData.dateOut}</p><p>fullName: ${userData.fullName}</p><p>autoNumber: ${userData.autoNumber}</p><p>phone: ${userData.phone}</p><p>email: ${userData.email}</p>`,
  }

  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) console.log(err)
    else console.log(info)
  })

  res.send(200)
}
