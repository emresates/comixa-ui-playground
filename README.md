# Comixa UI Playground

Interactive docs and component playground for [comixa-ui](https://github.com/emresates/comixa-ui).

Standalone app — it does **not** import library source from a sibling checkout. The UI kit comes from `vendor/comixa-ui-0.1.3.tgz` (or npm once you switch the dependency).

## Setup

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Vite on port 5173 |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build |

## Updating comixa-ui

From the library repo:

```bash
npm run build
npm pack --pack-destination ../path-to-playground/vendor
```

Then in this repo:

```bash
npm install ./vendor/comixa-ui-x.y.z.tgz
```

When `comixa-ui@0.1.3+` is on npm, you can replace the file dependency with:

```json
"comixa-ui": "^0.1.3"
```
