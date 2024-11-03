![Image of a person marking points on a map!](/docs/header_image.jpg "Image of a person marking points on a map")

# NEXTJS & DOCKER & MAXMIND GEOLOCATION :earth_africa:

This is a template to build our NextJs project on a Docker container and have IP geolocation through Maxmind integration.

### DOCUMENTATIONS :page_facing_up:

- [Next.j s documentation](https://nextjs.org/docs)
- [Maxmind documentation](https://dev.maxmind.com/geoip/)
- [Maxmind GeoIP Update repository](https://github.com/maxmind/geoipupdate)
- [Docker image Node.js](https://hub.docker.com/_/node)
- [mmdb-lib package](https://www.npmjs.com/package/mmdb-lib)
- [Supercronic package](https://github.com/aptible/supercronic)

### SETTINGS :wrench:

First, we will access the project from the terminal and create the folder where we will store our `.mmdb` file:

```bash
cd nextjs-docker-maxmind
mkdir /maxmind/db
```

We will need a GeoLite account on [Maxmind](https://www.maxmind.com/en/geolite2/signup). From which we will generate our license key.

Once we have our GeoLite account in Maxmind, we will have to manually download our [mmdb file](https://dev.maxmind.com/geoip/docs/databases/city-and-country/) to be able to develop locally. Always placing it in the path that we select in our environment variable `MAXMIND_DB_PATH`.

Attached to the repository we find a file `.env.example` We must clone this file and rename it to `.env`. Here we find the environment variable from which we will indicate the path of our [mmdb file](https://maxmind.github.io/MaxMind-DB/).

Example:

```bash
MAXMIND_DB_PATH=maxmind/db/{{your_filename}}.mmdb
# REPLACE TO
MAXMIND_DB_PATH=maxmind/db/GeoLite2-city.mmdb
```

In the `GeoIP.conf` file located inside the `/maxmind` folder we will need to indicate our __ACCOUNT ID__ and __LICENSE KEY__.

In the `GeoIP.conf` file we also find the `DatabaseDirectory` parameter which corresponds to the place where we want `geoipupdate` to download and update our maxmind databases. The directory indicated in this file must match the directory indicated in our `MAXMIND_DB_PATH` environment variable, since this is where our application will try to access the `.mmdb` file both in our local environment and in the Docker container.

By default the indicated directory will be `/maxmind/db/`.

Stated properties:

```
AccountID YOUR_ACCOUNT_ID_HERE
LicenseKey YOUR_LICENSE_KEY_HERE

DatabaseDirectory /app/maxmind/db
```

### DEVELOPMENT :computer:

To set up the project in development mode locally, we only need to manually download the Maxmind binary database (mmdb) that we want to use and place it in the `/maxmind/db/` directory. 

With the free tier, we have two options available:

- GeoLite2 Country
- GeoLite2 City

Once this is done, we can start our project with:

```
npm install
npm run dev
```

There is a demonstration endpoint set up under the `/api/maxmind` route.

### ANNOTATIONS :pencil2: