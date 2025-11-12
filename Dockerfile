# ---- Base Builder Image ----
FROM node:20-alpine AS builder

RUN corepack enable
WORKDIR /app

# Copy workspace metadata + ESLint
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json nx.json tsconfig.base.json eslint.config.mjs ./

COPY jest.config.ts jest.preset.js ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy app source code
COPY apps/web ./apps/web
# COPY libs ./libs   # Uncomment when you add libs

# Build the Next.js app
RUN pnpm nx build web

# ---- Runtime Image ----
FROM node:20-alpine

RUN corepack enable
WORKDIR /app

COPY --from=builder /app /app

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD ["pnpm", "--dir", "apps/web", "start"]