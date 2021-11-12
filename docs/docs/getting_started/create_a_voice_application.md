# Create a Voice Application

A Programmable Voice Application is a server that takes control of the flow in a call. A Voice Application can use any combination of the following verbs:

- `Answer` - Accepts an incoming call
- `Hangup` - Closes the call
- `Play` - Takes an URL or file and streams the sound back to the calling party
- `Say` - Takes a text, synthesizes the text into audio, and streams back the result
- `Gather` - Waits for DTMF or speech events and returns back the result
- `SGather` - Returns a stream for future DTMF and speech results
- `Dial` - Passes the call to an Agent or a Number at the PSTN
- `Record` - It records the voice of the calling party and saves the audio on the Storage sub-system
- `Mute` - It tells the channel to stop sending media, effectively muting the channel
- `Unmute` - It tells the channel to allow media flow

Perform the following steps to create a Voice Application.

First, create an empty NodeJS project with:

```bash
mkdir voiceapp
cd voiceapp
npm init # and follow the wizard
```

Then, with your favorite IDE create a file `index.js` with the following content:

```javascript
const { VoiceServer } = require("@fonoster/voice");
const voiceServer = new VoiceServer();

voiceServer.listen(async(req, res) => {
  console.log(req);
  await res.answer();
  await res.play("sound:hello-world");
  await res.hangup();
});
```

Next, install the Voice module with:

```
npm install @fonoster/voice
```

Finally, launch the Voice Application with:

```bash
node index.js
```

Your output will look like this:

```
$ node index.js 
info: initializing voice server
info: starting voice server @ 0.0.0.0, port=3000, path=/voiceapp
```

> Your app will live at `http://127.0.0.1:3000`. ⚠️ Be sure to leave the server up!

## Using Ngrok to publish your Voice Application 

Now that we have the Voice Application up and running, you need to make it available on the Internet. The fastest way to enable public access is by using Ngrok. For example, with Ngrok, you can publish a web server with a single command.

Run Ngrok, in your console, with the following command:

```bash
ngrok http 3000
```

Now you can use Ngrok's URL as the webhook on any of your Fonoster Numbers.