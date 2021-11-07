import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const userData = JSON.parse(req.body);

  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    port: 587,
    host: 'smtp.gmail.com',
    auth: {
      user: 'intellect.mo.tech@gmail.com',
      pass: '_admintech1989',
    },
    secure: false,
  });

  const mailData = {
    from: 'noreply.intellect.mo@gmail.com',
    to: 'intellect.mo.tech@gmail.com',
    subject: `Message From ${userData.email}`,
    text: "Заявка на занятие",
    html: `<div>dateIn: ${userData.firstName}</div><p>dateOut: ${userData.lastName}</p><p>fullName: ${userData.email}</p><p>autoNumber: ${userData.phoneNumber}</p>`,
  };

  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.send(200);
};
