# Configure a Number

Fonoster is a "Bring your own stuff" alternative to Twilio. This means that you can use any service that makes sense for your applications, including your favorite VoIP provider.

## Choosing a VoIP Provider

With Fonoster you can bring your own VoIP Provider for call origination or termination. However, we recommend using [VoIP.ms](https://voip.ms/)  for US and Canada.

Once you have a VoIP provider, you will need to compile the following information:

- Trunk Host/IP
- SIP Username for registration
- SIP Password for registration
- Transport (usually `UDP/TCP`)
- Phone number ideally in E164 format

## Creating a VoIP Provider

Once you have your trunk information, proceed to call the next command and follow the wizard:

```bash
fonoster providers:create
```

> List your providers with `fonoster providers:ls`

## Adding your Number

Adding a new Number is just as easy. Simply run the next command, and answer all the questions:

```bash
fonoster numbers:create
```

You are all set. We will now create the first Voice Application.
