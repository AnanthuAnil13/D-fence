#!/bin/bash

port=$((46337))
url=$1
ip=$2

mysql --defaults-extra-file=./config.cnf urldb -e 'INSERT INTO Link_Table (link, ip, port) VALUES ("'$url'", "'$ip'", '$port')'

name="firefox-$port"

sudo docker run -d --name=$name -p $port:5800 --shm-size 2g -e "FF_PREF_HTTP_PROXY=startup.homepage_welcome_url=\"$url\"" -e "VNC_PASSWORD=12345678" ananthuanil/d-fence

echo $port
