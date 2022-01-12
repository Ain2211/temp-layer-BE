#!/bin/sh
address=$1
id=$2

echo "process for address $address"

pm2 describe "$address" >/dev/null
RUNNING=$?

if [ "${RUNNING}" -ne 0 ]; then
    echo "Not Running"
    pm2 start --name "$address" yarn --interpreter bash -- console rebalance "$id"
else
    echo "Running"
fi
