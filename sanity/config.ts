const config = {
  projectId: 'hdziyq8o',
  dataset: 'production',
  apiVersion: '2023-05-14',
  useCdn: process.env.NODE_ENV === 'production' ? true : false
}

export default config;