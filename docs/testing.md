## Testing your Addon

To test your addon, you will need to add the addon manifest URL to a client.

There are currently two such clients that you can test with:

- OneTV v4.4.10+

- OneTV Web Version

**Note:** if you want to load an addon by URL in OneTV, the URL must either be accessed on `127.0.0.1` or support HTTPS.


### Starting/launching shortcuts

If you're using the [`serveHTTP`](/docs/README.md#servehttpaddoninterface-options) method, there are two shortcuts that you can use:

If you launch your addon with `npm start -- --launch`, it will open a web version of OneTV with the addon pre-installed.

Another shortcut is to use `npm start -- --install`, which will open the desktop version of OneTV and a prompt to install the addon.


### Testing in OneTV App

Testing in OneTV is easy, simply [download OneTV](https://onetv.media) v1.0+


### Testing in OneTV Web Version

Open the web version of OneTV at: https://onetv.media

If you use `npm start -- --launch`, the addon will automatically open OneTV in your browser.

**Note: Torrents will not work in OneTV's Web Version.**


### How to Install Addon in OneTV

Follow the 2 steps showcased in this image:

![add-on-repository-url](https://user-images.githubusercontent.com/1777923/43146711-65a33ccc-8f6a-11e8-978e-4c69640e63e3.png)
