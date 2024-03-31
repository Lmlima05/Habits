import Fastify from 'fastify'

const app = Fastify()

/**
  Metodo HTTP: Get, Post, Put, Patch, Delete
*/ 

app.get('/hello', () => {
  return 'Hello NLW'
})

app.listen({
  port: 3333,
})