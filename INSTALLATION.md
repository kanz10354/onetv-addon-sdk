# OneTV Addon SDK - Installation Guide

## 📦 Installation

### Option 1: Install from Local Directory (Recommended for Development)

```bash
npm install /path/to/onetv-addon-sdk
```

Or use a relative path:

```bash
npm install ../Addon SDK
```

### Option 2: Install from Git Repository (When Published)

```bash
npm install git+https://github.com/OneTV/onetv-addon-sdk.git
```

### Option 3: Global Installation (For CLI Tools)

```bash
npm install -g /path/to/onetv-addon-sdk
```

After global installation, you can use the `addon-bootstrap` command:

```bash
addon-bootstrap my-awesome-addon
```

## 🚀 Quick Start

### 1. Create a New Project

```bash
mkdir my-onetv-addon
cd my-onetv-addon
npm init -y
```

### 2. Install OneTV Addon SDK

```bash
npm install /path/to/onetv-addon-sdk
```

### 3. Create Your Addon

Create `addon.js`:

```javascript
#!/usr/bin/env node
const { addonBuilder, serveHTTP } = require('onetv-addon-sdk')

const builder = new addonBuilder({
    id: 'org.mycompany.myaddon',
    version: '1.0.0',
    name: 'My OneTV Addon',
    description: 'An awesome addon for OneTV',
    
    catalogs: [],
    resources: ['stream'],
    types: ['movie', 'series'],
    idPrefixes: ['tt']
})

builder.defineStreamHandler(function(args) {
    console.log(`Stream request: ${args.type} ${args.id}`)
    
    // Your logic here
    return Promise.resolve({ streams: [] })
})

serveHTTP(builder.getInterface(), { port: process.env.PORT || 7000 })
```

### 4. Run Your Addon

```bash
node addon.js
```

Your addon will be available at: `http://127.0.0.1:7000/manifest.json`

## 📖 Documentation

- [Full SDK Documentation](./docs/README.md)
- [API Reference](./docs/api/README.md)
- [Examples](./docs/examples.md)
- [Deployment Guide](./docs/deploying/README.md)

## 🧪 Testing

To test your addon in OneTV:

1. Start your addon server
2. Copy the manifest URL (e.g., `http://127.0.0.1:7000/manifest.json`)
3. Open OneTV and add the addon using the manifest URL

## 🔧 Development Tips

### Enable Auto-Reload

Use `nodemon` for automatic reloading during development:

```bash
npm install --save-dev nodemon
```

Add to `package.json`:

```json
{
  "scripts": {
    "dev": "nodemon addon.js"
  }
}
```

Run with:

```bash
npm run dev
```

### Environment Variables

```bash
PORT=8080 node addon.js
```

## 📚 Resources

- **Manifest**: Define your addon's capabilities
- **Catalog**: Provide lists of content
- **Meta**: Provide metadata for content items
- **Stream**: Provide streaming links
- **Subtitles**: Provide subtitle files

## 🆘 Support

For issues, questions, or contributions, please contact the OneTV team.

## 📄 License

MIT License - See [LICENSE.md](./LICENSE.md) for details
