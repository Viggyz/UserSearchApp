import { createClient } from 'redis';

const url = process.env.REDIS_URL || "127.0.0.1:6379";
// const port = process.env.PORT || 6379;

const redisClient = createClient({ url: url });

export { redisClient }