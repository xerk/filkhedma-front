# FilKhemda Front Test

node -v: 14.16.1 \
npm -v: 6.13.1 

## Docker Installtion 

Clone the project make sure you have 

Run docker build command

```docker build -t filKhemda-test .```

Let’s run our Vue.js app in a Docker container:

`docker run -it -p 8080:80 --rm --name filKhemda-test-app-1 filKhemda-test`


## Local Installtion 

`npm install`

`npm run dev`

`npm run build`

UNIT TEST \
`npm run test`