#!/bin/bash

#ran=$RANDOM

#ran2=$((10000+$RANDOM%15000))
ran2=$((46337))
url=$1

name="firefox-$ran2"
echo $ran2

sudo docker run -d --name=$name -p $ran2:5800 --shm-size 2g -e "FF_PREF_HTTP_PROXY=startup.homepage_welcome_url=\"$url\"" jlesage/firefox
