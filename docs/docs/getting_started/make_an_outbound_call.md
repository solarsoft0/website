# Make an outbound call

Did you know that with Fonoster can you can initiate a phone call from Node.js?

With a single API request, we can make an outbound call from the Fonoster Number. Open a new file called `call.js` and type or paste in the following code.

```javascript
// This will load the SDK and reuse your Fonoster credentials
const Fonoster = require("@fonoster/sdk");
const callManager = new Fonoster.CallManager();

// Few notes:
//  1. Update the from to look exactly as the Number you added 
//  2. Replace the webhook with the one from your Ngrok
callManager.call({
 from: "+19842753574",
 to: "17853178070",
 webhook: "https://5a2d2ea5d84d.ngrok.io"
})
  .then(console.log)
  .catch(console.error);
```

## Make an outbound call

This code starts a phone call between the two phone numbers that we pass as arguments. The `from` number is our Fonoster number, and the 'to' number is who we want to call.

The `webhook` argument points to a Programmable Voice Application, which tells Fonoster to handle the call once the recipient answer the call.

## Replace the to and from phone numbers

Remember that Fonoster Number you set up earlier? Go ahead and replace the existing from a number with that one, making sure to use E.164 formatting:

`[+][country code][phone number including area code]`

Next, replace the `to` phone number with a mobile or landline phone you have with you.

Save your changes and run the code by running the following command from your terminal:

```bash
node call.js
```

That's it! Your phone should ring with a call from your Fonoster, and you'll hear our short message for you.