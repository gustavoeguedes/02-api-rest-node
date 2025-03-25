import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'lehho world'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP SERVER RUNNIG')
  })
