# Akane

## Akane is an open sourced project developed by Team DevHub

Akane is a Discord Bot which includes a range of Anime Collectable Cards, Akane is currently outdated so most of thecode can/most likely will be unstable/cause errors when ran.

if you have any issues with it feel free to open an issue in the repository!

If you'd like to reach me personally you can join my Discord Server: https://discord.gg/tUCCsRSHxQ

If you want to deploy your bot on Heroku, then do not change or delete the **Procfile**

#### How to get started:

Create a settings.json file like the following:
##### DefaultPrefix isnt a value which is used at the moment ...

```
{
	"token":"Add Your Discord Bot Token here",
	"prefix":"Add your bot's prefix here",
    "topgg_token":"Enter your topgg Token here.(Only Necessary if you enable the vote command)",
    "pass":"Enter your TopGG Webhook's Password here(Only Necessary if you enable the vote command)",
    "MONGO_URI":"Enter Your MongoURI here."
}
```

Once done run the following:

```
npm install

node .
```
[Dont have Node? Click me!](https://nodejs.org/en/)<br>
[Generate Bot Token from here!](https://discord.com/developers/applications)<br>
[Generate MongoURI from here!](https://mongodb.com)
