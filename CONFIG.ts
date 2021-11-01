export interface Config {
  instagramUrl: string
  whatsappUrl: string
  telegramUrl: string
  phoneNumber: string
  email: string
  appName: string
  slogan: string
  workingHours: string
  defaultTitle: string
}

export const CONFIG: Config = {
  instagramUrl: 'https://www.instagram.com/sergey_vet777/',
  telegramUrl: 'https://telegram.im/@Sergey',
  whatsappUrl: 'whatsapp://send?phone=79111648558',
  phoneNumber: '+7 (911) 164-85-58',
  email: 'vetslon@bk.ru',
  appName: 'ВетСлон',
  slogan: 'Ветеринарная помощь  с выездом по СПБ и области',
  workingHours: '24/7',
  defaultTitle: 'Ветеринарная помощь с выездом',
}
