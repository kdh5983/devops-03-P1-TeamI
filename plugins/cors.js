'use strict'

const fp = require('fastify-plugin')

const cors = require('@fastify/cors')
module.exports = fp(async function (fastify, opts) {
  fastify.register(cors, {origin:true})
    //플러그인 내용
  console.log('cors플러그인 등록 성공')

})
