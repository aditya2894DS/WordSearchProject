// Not a good way to store, keys especially if you are pushing code to GitHub
// Use environment variables instead or create a json file

module.exports = {
  mongoURI:"mongodb://AdityaP:aditya2894@wordsearchdb-shard-00-00.huwrd.mongodb.net:27017, wordsearchdb-shard-00-01.huwrd.mongodb.net:27017,wordsearchdb-shard-00-02.huwrd.mongodb.net:27017/wordsearchdb?ssl=true&replicaSet=atlas-m79btt-shard-0&authSource=admin&retryWrites=true&w=majority", 
  sessionSecret: "hakunamatata123",
  accessTokenSecret: "wordsearch2020" }