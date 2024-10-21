import {Ratelimit} from "@unkey/ratelimit";
import dotenv from 'dotenv';
dotenv.config();

export const unkey = new Ratelimit({
  rootKey: process.env.UNKEY_ROOT_KEY!,
  namespace: "loopback-example",
  limit: 12,
  duration: "30s",
  async: true
})
