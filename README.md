# Ratelimit LoobackJS routes using Unkey

This app demonstrates @unkey/rate limit and how you can rate limit your astro routes. Try the following curl request. The `/expensive` route is rate-limited to 3 requests per 30 seconds. While the `/cheap` route is rate-limited to 6 requests per 30 seconds.

## Prerequisites

Create an account with [Unkey](https://app.unkey.com/)

## Setup Unkey

1. Go to unkey [ratelimits](https://app.unkey.com/ratelimits)

2. Create a new namespace with the name `loopback-example`

3. Go to settings/root-keys and create a root key with Ratelimit permissions

4. You can follow this link to create the root key with ratelimit permissions [https://app.unkey.com/settings/root-keys/new?permissions=ratelimit.*.create_namespace,ratelimit.*.read_namespace,ratelimit.*.limit,ratelimit.*.update_namespace,ratelimit.*.delete_namespace](https://app.unkey.com/settings/root-keys/new?permissions=ratelimit.*.create_namespace,ratelimit.*.read_namespace,ratelimit.*.limit,ratelimit.*.update_namespace,ratelimit.*.delete_namespace)

5. Add it in the .env file `UNKEY_ROOT_KEY`


## Quickstart

1. **Clone the repository:**

   ```bash
   git clone https://github.com/harshsbhat/unkey-loopback.git
   cd unkey-loopback
   ```
2. **Install the dependencies**

   ```bash
   npm install
   ```

3. **Start the project. It should start on port 3000**

   ```bash
   npm start
   ```
## Usage

1. **PING Route without any rate limit:**

   ```bash
   curl http://127.0.0.1:3000/ping
   ```
2. **Cheap Route with 6 requests per 30 seconds**

   ```bash
    curl http://127.0.0.1:3000/cheap
   ```

3. **Expensive Route with 3 requests per 30 seconds***

   ```bash
   curl http://127.0.0.1:3000/expensive
   ```
