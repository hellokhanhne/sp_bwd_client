FROM node:16.5.0

WORKDIR /fe-design
COPY . .
RUN npm i -g vite
RUN npm i -g tsc
RUN yarn install --production
CMD ["yarn", "dev"]
EXPOSE 3000