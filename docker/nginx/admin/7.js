webpackJsonp([7],{"./instructions/server/server-summary-facebook.en.md":function(e,o){e.exports="**Server type** - Facebook\n\n**Name** - There is no need to change this.\n\n**Identifier** - There is no need to change this.\n\n**New users** - Controls whether new Trambar accounts are created for users\nauthenticated through Facebook. You can choose to make Facebook users guests at\nyour site or make them regular users.\n\nIf you choose to not register new users, then only users you've manually created\ncan sign-in through Facebook. You will need to know which e-mail address they've\nused to sign up for Facebook.\n\n**Role assignment** - You can automatically assign roles to new users\nauthenticated through this server. This is useful for story filtering.\n\n**Site URL** - You will need this URL when you create an app in the [Facebook\nApp Dashboard](https://developers.facebook.com/apps/). First, press\nthe *Add a new app* button. Enter a display name (e.g. _Rick's Trambar_) and\na contact e-mail address then press *Create App ID*. Add *Facebook Login* to\nthe app. Select *WWW* as the platform. Copy this URL into the box under\n*Site URL* and press *Save*. Skip the remaining steps.\n\n**Redirect URL** - In the left navigation bar, choose *Facebook Login*, then\n*Settings*. Copy and paste this URL into the box labeled *Valid OAuth Redirect\nURIs*.\n\n**Privacy policy URL** - Facebook requires a privacy policy URL. You may\nlink to your company's own page or use this boilerplate. It is entered\nin *Settings* > *Basic*.\n\n**Terms and conditions URL** - Facebook requires a terms and conditions URL.\nYou may link to your company's own page or use this boilerplate. It is entered\nin *Settings* > *Basic*.\n\n**App key** - Copy the app key from Facebook App Dashboard. It can be found in\n*Settings* > *Basic*.\n\n**App secret** - Copy the app secret from Facebook App Dashboard. You will\nneed to first click the *Show* button.\n\nAfter you've saved this server, click the *Test OAuth integration* button to\nverify that the configuration is correct.\n\nYou will need to change the status of the app from _Development_ to _Production_\nin the Facebook App Dashboard once you're ready to deploy your site. Prior\nto doing so, you may want to entering additional information (app category and\ncountry restriction). For the app icon, you may use your company's logo or\nchoose Trambar's [default icon](facebook-icons.zip).\n"}});