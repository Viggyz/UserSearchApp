import { app } from './app'
import { redisClient } from './make-client';

const startUp = async () => {
    console.log("initializing..")

    const client = redisClient;

    try {
        await client.connect();
        console.log("Redis connected")
    }
    catch (err) {
        console.log(err);
        throw new Error("Unable to connect to Redis")
    }
}
//sudo service redis-server start

app.listen(8000, () => {
    console.log('App listening on 8000');
});

startUp();