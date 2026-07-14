# Comixa UI Playground

Interactive docs and component playground for [comixa-ui](https://github.com/emresates/comixa-ui).

The library is loaded from local source via `../src`, so this repo must live inside a `comixa-ui` checkout:

```text
comixa-ui/
  src/
  playground/   ← clone this repo here
```

## Setup

```bash
# from a comixa-ui checkout
git clone https://github.com/emresates/comixa-ui-playground.git playground
cd playground
npm install
npm run dev
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Vite on port 5173 |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build |
