# fabriziopapa.com

Monorepo del sito personale realizzato con **Turborepo**, **pnpm**, **Fastify** (backend) e **React + TypeScript** (frontend). Il frontend utilizza Vite con React Compiler.

## Struttura

```bash
fabriziopapa.com/
├── apps/
│   ├── backend/
│   │   ├── src/
│   │   │   └── server.ts          # entry point Fastify (TypeScript)
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── dist/                  # generata da `pnpm run build` (non in Git)
│   └── frontend/
│       ├── src/
│       │   ├── App.tsx
│       │   ├── main.tsx
│       │   └── ...                # altri file React/Vite
│       ├── index.html
│       ├── package.json
│       ├── tsconfig.json
│       ├── vite.config.ts
│       └── dist/                  # generata da `pnpm run build` (non in Git)
├── package.json                   # root scripts (build, start, dev)
├── pnpm-workspace.yaml            # definisce il workspace monorepo
├── turbo.json                     # configura Turborepo
├── tsconfig.json                  # configurazione TypeScript condivisa
├── .gitignore                     # esclude node_modules, dist, ecc.
└── README.md
```


## Requisiti

- Node.js 20+
- pnpm (abilitato via `corepack enable`)

## Installazione

```bash
# Clona il repository
git clone https://github.com/fabriziopapa/fabriziopapa.git
cd fabriziopapa

# Installa le dipendenze (inclusi backend e frontend)
pnpm install
```

## Sviluppo

Per avviare l'ambiente di sviluppo:
bash

# Avvia il backend in modalità watch
pnpm --filter backend dev

# In un altro terminale, avvia il frontend
pnpm --filter frontend dev

Il backend sarà accessibile su http://localhost:3000, il frontend su http://localhost:5173 (con proxy per le API configurato in vite.config.ts).


## Build e produzione
```bash

# Compila backend e frontend
pnpm run build

# Avvia il server in produzione (backend che serve anche il frontend)
pnpm run start
```

Dopo la build, i file statici del frontend si trovano in apps/frontend/dist e vengono serviti da Fastify su /.
## Deploy su aaPanel

    Caricare il repository sul server (es. via git clone).

    Installare le dipendenze con pnpm install e compilare con pnpm run build.

    In aaPanel, creare un progetto Node con:

        Path: /www/wwwroot/fabriziopapa.com

        Run opt: node apps/backend/dist/server.js

        Porta: 3000

        Dominio: www.fabriziopapa.com

    Il reverse proxy si occuperà di inoltrare le richieste dal dominio al server Node.

## Tecnologie utilizzate

- [Turborepo](https://turbo.build) – orchestrazione del monorepo
- [pnpm](https://pnpm.io) – package manager efficiente
- [Fastify](https://fastify.dev) – backend performante
- [React 19](https://react.dev) + TypeScript
- [Vite](https://vitejs.dev) – bundler frontend
- [React Compiler](https://react.dev/learn/react-compiler) – ottimizzazioni automatichematiche