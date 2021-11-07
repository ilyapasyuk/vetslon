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
  globalInfoDatabaseId: string
  firebaseConfig: {
    apiKey: string
    authDomain: string
    databaseURL: string
    projectId: string
    storageBucket: string
    messagingSenderId: string
    appId: string
    measurementId: string
  }
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
  globalInfoDatabaseId: '0efc479e4018438c9a8fb56d71be2f42',
  firebaseConfig: {
    apiKey: 'AIzaSyCbzsd7c-NKW6MFKDJu4bW710Qui1T0ruI',
    authDomain: 'vetslon.firebaseapp.com',
    databaseURL: 'https://vetslon-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'vetslon',
    storageBucket: 'vetslon.appspot.com',
    messagingSenderId: '438436121274',
    appId: '1:438436121274:web:4e81645adb2017791e9083',
    measurementId: 'G-L1FL89F9D4',
  },
}

export enum COLLECTION {
  SERVICES = 'services',
  USERS = 'users',
  PAGES = 'pages',
  SERVICES_CATEGORIES = 'servicesCategories',
}
