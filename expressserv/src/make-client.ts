import { createClient } from 'redis';

const url = process.env.REDIS_URL || "127.0.0.1";



const redisClient = createClient({ url: `redis://${url}` });

export { redisClient }