// require in runtime helpers...not required but helpful!
let arc = require('@architect/functions')

exports.handler = async function http (req) {
  // need to instantiate arc.tables to lookup dynamo physical table names
  let data = await arc.tables()
  // data is thin wrapper for aws-sdk dynamodb client
  let result = await data.cats.scan({})
  // probably want to do more here!
  return { body: JSON.stringify(result) }
}
