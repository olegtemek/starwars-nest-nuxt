FROM node:16

RUN mkdir -p /usr/client
WORKDIR /usr/client
COPY . .

RUN npm ci && npm cache clean --force
RUN npm run build

ENV PORT=3001

EXPOSE 3001

ENTRYPOINT ["node", ".output/server/index.mjs"]