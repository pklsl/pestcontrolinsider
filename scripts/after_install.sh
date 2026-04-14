#!/bin/bash
set -e

# Set correct ownership and permissions
chown -R www-data:www-data /var/www/pestcontrolinsider
find /var/www/pestcontrolinsider -type d -exec chmod 755 {} \;
find /var/www/pestcontrolinsider -type f -exec chmod 644 {} \;

# Reload nginx to apply any config changes
nginx -t && systemctl reload nginx
