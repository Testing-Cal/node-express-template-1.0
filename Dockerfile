FROM node:20.11.1-slim
# set working directory
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# set contxt via env
ENV context ""
ENV port 4000
# install app dependencies
COPY package.json ./

RUN npm install

# add app
COPY src ./src

COPY views ./views

# start app
CMD ["node", "./src/app.js"]