'use strict'

const fp = require('fastify-plugin')

const mongodb = require('@fastify/mongodb')
module.exports = fp(async function (fastify, opts) {

  console.log(process.env.CONNECION_STRING)
  
  fastify.register(mongodb, {
     forceClose: true,
     url: process.env.CONNECION_STRING

  })
    //플러그인 내용

  console.log('mongodb 플로그인 등록 성공')

})
