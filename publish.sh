#!/usr/bin/env bash

rm -rf ./public

echo removing public folder....
sleep 3

echo re-building site
hugo

echo site re-built successfully