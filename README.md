# Medium Agenda

Currently on Development. The frontend for Medium Agenda is still in very early development in the [Medium Client](https://github.com/juliobguedes/MediumClient) repository.

## What is Medium Agenda

Medium Agenda is a website that you, as a wonderful story reader, can track progress of notes, claps and comments in the medium stories that you read.

In the daily use of Medium Agenda, you'll have a to-do list of stories fed by your Medium Daily Digest and a list of the stories you read in the past. When you are studying a subject, you will always be able to look out to the past stories that you've read, and read yur own comments about them, boosting the learning curve.

## How to run

To run Medium Agenda, just enter `yarn start` on a terminal and the app will be running on the port specified in the `.env` file. The other variables in the `.env` file must also be filled:

* MEDIUM_SKEY: Medium Security Key.
* MEDIUM_CID: Medium Client ID.
* MEDIUM_IT: Medium User's Integration Token.
* LOCAL_MONGO_URL: Mongo URL if running in your own device.
* MONGO_URL: Mongo URL if not running in your own device.
* REDIRECT_URL: Medium callback URL.
* PORT: The port you want the process to run on it.

You definitely should check out the `/graphql` route.
