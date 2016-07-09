#!/bin/sh
echo $UID
BASEDIR=$(dirname $0)
echo $BASEDIR
if [ $(ps aux | grep -i "portfolio" | grep -v "grep" | wc -l) -eq 0 ]
then
	echo "starting portfolio"
        export PATH=/usr/local/bin:$PATH
	#gulp build
        forever start --sourceDir $BASEDIR $BASEDIR/server/app.js >> $BASEDIR/logs.txt
else
	echo "Already running"
fi
