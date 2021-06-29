# async_hooks sample usage

The project contains sample code for a http server working with async_hooks. The server has one get endpoint which returns true/false considering async storage is used or not for a given request context.

# Working:

1. Run server.js locally to start the server.
2. During setting up routes, async_hook is setup in a way that it creates a new async storage context for each incoming request.
3. In file1, the function tries to find the "cached" object but since its first execution, its not found. A random value is generated and stored in the async storage. The same value is the returned.
4. In file2, the function tries to find the "cached" object and since it is found, it returns the value.
5. later in file1, we check if both values from above 2 steps match, basically checking if the async storage worked or not and return true/false accordingly.

# Notes:
1. Async storage is a stable feature in Node 16.
2. Expect drop in performance, exact value not calculated.[[3](https://blog.kuzzle.io/nodejs-14-asynclocalstorage-asynchronous-calls)]

# Further reading:
1. https://nodejs.org/api/async_context.html#async_context_class_asynclocalstorage
2. https://gist.github.com/rcoedo/78c601de3bea8c3fc85175f8cd175148#file-async-local-storage-example-3-js
3. https://blog.kuzzle.io/nodejs-14-asynclocalstorage-asynchronous-calls
