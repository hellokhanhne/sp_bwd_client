FROM node:16.15.1

WORKDIR /fe-design
COPY . .
RUN npm i -g vite 
RUN npm install --force
# RUN yarn build
CMD ["yarn", "dev"]
EXPOSE 3000