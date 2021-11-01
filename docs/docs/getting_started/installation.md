# Installation

Fonoster libraries are available for NodeJS via the `@fonoster/sdk` or the web via the `@fonoster/websdk`. 

## NodeJS

Via NPM

```bash
npm install @fonoster/sdk
```

Find the source code on [GitHub](https://github.com/fonoster/fonoster).

## Browser

Via NPM

```bash
npm install @fonoster/websdk
```

If you're using a bundler (like Browserify or webpack), you can import the WebSDK module with:

```Typescript
import SDK from "@fonoster/websdk";
```

Or via CDN

```html
<script src="https://unpkg.com/@fonoster/websdk@0.2.8/dist/websdk.js"></script>
// This will populate the object `Fonoster`
```