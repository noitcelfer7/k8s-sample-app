FROM node:22.11.0-slim as build

WORKDIR /k8s-application/

COPY --chown=node:node . /k8s-application/

RUN npm ci

RUN npm run build

FROM node:22.11.0-slim as run

COPY --chown=node:node --from=build /k8s-application/dist/ /k8s-application/dist/

CMD ["node", "/k8s-application/dist/index.js"]
