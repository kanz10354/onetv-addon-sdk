# OneTV Addon SDK 🧙

<img src="https://onetv.media/logo.png" alt="OneTV" width="250" />

The **🧙  OneTV Addon SDK 🧙** was developed by the OneTV Team as a way of vastly simplifying Node.js addon creation for
our streaming platform.

OneTV currently supports Windows, macOS, Linux, Android and iOS.

**Important: We strongly recommend deploying addons to the [BeamUp](./docs/deploying/beamup.md) servers**


## Quick Example

This arbitrary example creates an addon that provides a stream for Big Buck Bunny and outputs a HTTP address where you can access it.

```javascript
const { addonBuilder, serveHTTP, publishToCentral }  = require('onetv-addon-sdk')

const builder = new addonBuilder({
    id: 'org.myexampleaddon',
    version: '1.0.0',

    name: 'simple example',

    // Properties that determine when OneTV picks this addon
    // this means your addon will be used for streams of the type movie
    catalogs: [],
    resources: ['stream'],
    types: ['movie'],
    idPrefixes: ['tt']
})

// takes function(args)
builder.defineStreamHandler(function(args) {
    if (args.type === 'movie' && args.id === 'tt1254207') {
        // serve one stream to big buck bunny
        const stream = { url: 'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4' }
        return Promise.resolve({ streams: [stream] })
    } else {
        // otherwise return no streams
        return Promise.resolve({ streams: [] })
    }
})

serveHTTP(builder.getInterface(), { port: process.env.PORT || 7000 })
//publishToCentral("https://your-domain/manifest.json") // <- invoke this if you want to publish your addon and it's accessible publically on "your-domain"
```

Save this as `addon.js` and run:

```bash
npm install onetv-addon-sdk
node ./addon.js
```

It will output a URL that you can use to [install the addon in OneTV](./docs/testing.md#how-to-install-addon-in-onetv)

**Please note:** addon URLs in OneTV must be loaded with HTTPS (except `127.0.0.1`) and must support CORS! CORS support is handled automatically by the SDK, but if you're trying to load your addon remotely (not from `127.0.0.1`), you need to support HTTPS.


## Getting started with a new addon

In order to scaffold a new OneTV addon, we've made a tool called `addon-bootstrap`.

You can use it in the following way:

```bash
npm install -g onetv-addon-sdk # use sudo if on Linux
addon-bootstrap hello-world
```

You'll be asked about what [resources and types](./docs/api/README.md) you want to support, after which the addon will be created in the `hello-world` directory, and you'll be able to run it:

```bash
cd hello-world
npm install
npm start -- --launch
```

If you wish to install the addon in the Desktop version of OneTV (which you can [download here](https://onetv.media)), you should use `npm start -- --install`

## Documentation

All our documentation is [right here on GitHub](./docs). Take a look at our [examples list](./docs/examples.md) for some high-level
information, or dive straight into our [SDK documentation](./docs/README.md) for our code reference docs.

We also have example addons that you can use as a guide to help you build your own addon.

We've made step by step guides to help you create addons for OneTV.

If you don't wish to use Node.js (and therefore not use this SDK either), you can create addons in any programming
language, see the [addon protocol specification](./docs/protocol.md) for more information.

It is also possible to create an addon without any programming language, see the protocol specification for details.

SDK Features Include:

- Publishing an addon through HTTP(s)
- Publishing your addon link to the public Addon collection with [publishToCentral](./docs/README.md#publishtocentralurl)
- Creating a homepage for your addon that includes an "Install Addon" button

## Testing

For developers looking for a quick way to test their new addons, you can either:

- [Test with OneTV](./docs/testing.md#testing-in-onetv-app)
- [Test with our Web Version](./docs/testing.md#testing-in-onetv-web-version)


## Deploying

In order for your addon to be used by others, it needs to be deployed online.

You can check our [list of recommended hosting providers for Node.js](./docs/deploying/README.md) or alternatively host it locally with [localtunnel](https://github.com/localtunnel/localtunnel).

After you've deployed publically, in order to get your addon to show in OneTV, you need to use [publishToCentral](./docs/README.md#publishtocentralurl).

## Examples & tutorials

Check out our ever growing list of [examples and demo addons](./docs/examples.md). This list also includes examples & tutorials on how to develop OneTV addons in PHP, Python, Ruby, C#, Rust, Java and Go. It also includes a list of video tutorials.


## Advanced Usage

Read our [guide for advanced usage](./docs/advanced.md) to understand the many ways that addons can be used.


## Reporting Issues

If you have any issues regarding the OneTV Addon SDK, please feel free to report them to the OneTV team.


## Migration from v0.x

To migrate from v0.x, you need to:

- change `new addonSDK` to `new addonBuilder`, which you can import via `const addonBuilder = require('onetv-addon-sdk').addonBuilder`
- change `addon.run(opts)` to `serveHTTP(addon.getInterface(), opts)`, which you can import via `const serveHTTP = require('onetv-addon-sdk').serveHTTP`
- all handlers have to return a `Promise` (rather than take a `cb`)


## Use Cases Outside Addon SDK

The use of this SDK is not mandatory for creating OneTV Addons. You can use any programming language that supports
creating a HTTP server to make OneTV Addons. Refer to our [protocol specification](./docs/protocol.md) for details and examples.

One useful scenario of not using the SDK is when you need user specific data for you addon (for example, an API
Autherntication Token), you can see an example of passing user specific data in the Addon URL [here](./docs/advanced.md#using-user-data-in-add-ons).
This example uses Node.js and Express to get user specific data. (Update: the Addon SDK now supports [user settings](./docs/api/responses/manifest.md#user-data))


_built with love and serious coding skills by the OneTV Team_

<img src="https://onetv.media/logo.png" width="300" />
