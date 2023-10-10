FROM node:20

RUN npm install -g pnpm@8.6.5

WORKDIR /app

COPY . .

RUN pnpm install --frozen-lockfile --prefer-offline

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production
RUN pnpm run build

CMD ["pnpm", "run", "start"]

EXPOSE 3000