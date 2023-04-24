'use strict'

const update = require("../article backup/update")

module.exports = async function (fastify, opts) {
  fastify.patch('/:id', async function (request, reply) {
    const body = request.body

    const articles = this.mongo.db.collection('article')

    const result = await articles.updateOne({user_id:1},
      {$set:{
      user_id: body.user_id,
      content: body.content,
      created_at: body.created_at,
      updated_at: body.updated_at,
      like: body.like
    }

        })

    console.log(result)

    reply
      .code(200)
      .header('content-type','application/json')
      .send(result)
  })

}

//update