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

Once you have your trunk information, follow the next few steps:

```none
1. Open a new terminal
2. Add a new Provider
```

<video width="100%" playsInline="" controls="muted">
 <source src="/videos/configure_a_number_1.mov" type="video/mp4" playsInline="" />
</video>

## Adding your Number

Adding a new Number is just as easy:

```none
1. Open a new terminal
2. Issue a create number command
3. Ensure the number has the format given by your provider
4. Skip the "address of record"
5. Enter the application's webhook (as per the last guide)
```

<video width="100%" playsInline="" controls="muted">
 <source src="/videos/configure_a_number_2.mov" type="video/mp4" playsInline="" />
</video>

You are all set. Next we will test the application.
