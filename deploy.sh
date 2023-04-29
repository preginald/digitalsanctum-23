#!/bin/bash

# Pull latest updates from Github
git pull

# Build the project
npm run build

# Stop any running instances of PM2
pm2 kill

# Start the project with PM2
pm2 start
