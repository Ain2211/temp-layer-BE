#!/bin/sh
address=$1
id=$2

echo "process for address $address"

pm2 describe "$address" >/dev/null
RUNNING=$?

if [ "${RUNNING}" -ne 0 ]; then
    echo "Not Running"
else
    pm2 del "$address"
    echo "Running"
fi
