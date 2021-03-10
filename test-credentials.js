const AWS = require('aws-sdk')

const accessKeyId = 'test1234'
const secretAccessKey = 'test1234'

const credentials = new AWS.Credentials(accessKeyId, secretAccessKey, sessionToken = null)
