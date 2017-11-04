require('dotenv').config()

module.exports = {
  port: process.env.PORT,
  auth: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      secret: process.env.GITHUB_CLIENT_SECRET,
      callbackUrl: process.env.GITHUB_CLIENT_CALLBACK_URL
    },
    sessionSecret: process.env.SESSION_SECRET,
    zorkoCallbackUrl: process.env.ZORKO_CALLBACK_URL
  }
}
