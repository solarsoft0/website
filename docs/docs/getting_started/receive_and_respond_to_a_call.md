# Receive and respond to a call

Fonoster can accept calls from different sources such as phones, web pages, and mobile devices, and connect them with your Programmable Voice Application using a webhook.

When your Fonoster Number receives an incoming phone call, it will send an HTTP request to a server you control. This callback mechanism is known as a webhook. When Fonoster sends your application a request, it expects a response in a JSON format that tells it how to respond to the call.

To connect a Number to an application you must use the `webhook` parameter. You can set the webhook using the `numbers:update` command.

```bash
fonoster numbers:update [ID]
```

Now, all we have to do is expose this webhook to Fonoster using Ngrok or a similar tool, and your application will have control.
