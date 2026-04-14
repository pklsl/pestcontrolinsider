#!/bin/bash
set -e

# Clean the deployment directory before installing new files
rm -rf /var/www/pestcontrolinsider/*
mkdir -p /var/www/pestcontrolinsider
