# Troubleshooting

## Are you not receiving the call at all?

The first thing to check is that your SIP Service Provider configuration is correct. Next, double-check the `username`, `password`, and `host`. If your Provider has an Admin console, check if you can see the registration coming from Fonoster.

Next, make sure the `from` matches the Number given to you by your Provider and ensure the `to` has the correct prefix (for example, +1, etc.).

## You receive the call but immediately hang up (did not hear a sound)

First, verify that Ngrok is still running. Next, compare Ngrok's URL with the `webhook` on your Number. They must match!

Then observe the console's output where your Programmable Voice Application is running, and look for any errors.
