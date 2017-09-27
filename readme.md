# Starter Kit for Building Applications in React and Redux in ES6

[https://github.com/coryhouse/pluralsight-redux-starter/](https://github.com/coryhouse/pluralsight-redux-starter/)

## Docker environment

```> docker build -t node6app .```

```> docker run --rm --name node6app node6app npm version```

```> docker run --rm -v /home/mikael/dev/react/react-redux-docker/app:/usr/src/app/app -p 3000:3000 --name node6app node6app npm run open:src```

```> docker-compose run -p 3000:3000 node npm run open:src```

```> docker-compose run -p 3000:3000 node npm start```

```> docker container stop reactreduxdocker_node_run_16```
