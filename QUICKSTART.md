# 🚀 OneTV Addon SDK - Quick Start

## Install the SDK

```bash
npm install onetv-addon-sdk
```

## Create Your First Addon

Create a file called `addon.js`:

```javascript
const { addonBuilder, serveHTTP } = require('onetv-addon-sdk')

const builder = new addonBuilder({
    id: 'org.mycompany.myaddon',
    version: '1.0.0',
    name: 'My Awesome Addon',
    description: 'Provides streams for OneTV',
    
    catalogs: [],
    resources: ['stream'],
    types: ['movie', 'series'],
    idPrefixes: ['tt']
})

builder.defineStreamHandler(function(args) {
    console.log(`Request: ${args.type} ${args.id}`)
    
    // Return your streams here
    return Promise.resolve({ streams: [] })
})

serveHTTP(builder.getInterface(), { port: 7000 })
```

## Run Your Addon

```bash
node addon.js
```

Your addon is now running at `http://127.0.0.1:7000/manifest.json`

## Install in OneTV

1. Copy the manifest URL: `http://127.0.0.1:7000/manifest.json`
2. Open OneTV
3. Add the addon using the manifest URL

## Next Steps

- [Full Documentation](./docs/README.md)
- [API Reference](./docs/api/README.md)
- [Examples](./docs/examples.md)
- [Deployment Guide](./docs/deploying/README.md)

## Package Location

The `onetv-addon-sdk` package is located at:
```
/Users/saaami/Documents/stream/Addon SDK/onetv-addon-sdk-1.6.10.tgz
```

To install from this tarball:
```bash
npm install /Users/saaami/Documents/stream/Addon\ SDK/onetv-addon-sdk-1.6.10.tgz
```

Or use a relative path:
```bash
npm install ../Addon\ SDK/onetv-addon-sdk-1.6.10.tgz
```

## Publishing to npm (Future)

When ready to publish publicly:

```bash
cd "/Users/saaami/Documents/stream/Addon SDK"
npm publish
```

Then anyone can install with:
```bash
npm install onetv-addon-sdk
```
