module.exports = {
    api : {
      port: process.env.API_PORT || 3000
    },
  
    jwt: { 
      secret: process.env.JWT_SECRET ||'notascret!',
    },

    db: {
      uri: process.env.DB_URL
    }
  }