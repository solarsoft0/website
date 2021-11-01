export default [
  {
    lang: 'js',
    title: 'Voice App',
    description: 'Sign up a new user in an example chat room',
    code: `const { VoiceServer } = require("@fonoster/voice")
const voiceServer = new VoiceServer({ base: '/voiceapp' })

// Start the voice server
voiceServer.listen(async(req, res) => {
  console.log(req)
  // Answer the call
  await res.answer()
  // Use the Say verb to stream a sound back to the user
  res.say("Welcome to your application")
})

// your app will leave at http://127.0.0.1/voiceapp
// and you can easily publish it to the Internet with:
// ngrok http 3000
  `,
  },
  {
    lang: 'js',
    title: 'Call',
    description: 'Receive realtime messages in an example chat room',
    code: `const Fonos = require("@fonoster/sdk")
const callManager = new Fonos.CallManager()

// Replace the webhook with the one from your Ngrok
callManager.call({
  from: "9842753574",
  to: "17853178070",
  webhook: "https://5a2d2ea5d84d.ngrok.io"
})
  .then(console.log)
  .catch(console.error)
    `,
  }
]
