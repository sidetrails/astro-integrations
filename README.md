# @sidetrails/astro-cname

An Astro Integration for generating a CNAME file using the configured [`site`][site].

## Installation

```bash
npx astro add astro-cname
```

### Manual Install

Install the `@sidetrails/astro-cname` package.

```bash
npm install @sidetrails/astro-cname
```

Then, add the integration to `astro.config.*`.

```javascript
import { defineConfig } from 'astro/config';
import cname from '@sidetrails/astro-cname';

export default defineConfig({
  // ...
  integrations: [cname()],
});
```

## Usage

Configure the [`site`][site] in `astro.config.*`.

```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  // ...
  site: "https://my-site.com"
});
```

Or, pass the `--site` argument to `astro build`.

```bash
npm run astro build --site https://my-site.com
```

With the `site` configured, a CNAME file containing the hostname will be created in your output directory.

*CNAME*:
```
my-site.com
```

## License

MIT

Copyright (c) 2025-present Spencer Haan, [Side Trails Software Development][sidetrails]

<!-- Links -->
[sidetrails]: https://sidetrails.dev
[site]: https://docs.astro.build/en/reference/configuration-reference/#site
