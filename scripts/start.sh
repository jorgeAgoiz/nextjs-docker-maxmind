#!/bin/bash
/app/maxmind/geoipupdate -f /app/maxmind/GeoIP.conf --verbose &&
supercronic -debug /app/maxmind/crontab &
node server.js