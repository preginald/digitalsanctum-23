#!/bin/bash

# This script interacts with a MongoDB instance running inside a Docker container.
# It first drops a specified collection within a specified database.
# It then imports data into that collection from a JSON backup file.
# The database, collection, container, and backup file are all defined by variables.

# Variables
# Define the name of the MongoDB database to interact with
DATABASE_NAME="<database-name>"

# Define the name of the collection in the MongoDB database
COLLECTION_NAME="<collection-name>"

# Define the name of the Docker container where MongoDB instance is running
DOCKER_CONTAINER_NAME="<mongodb-container-name>"

# Define the full path to the JSON backup file to be imported into MongoDB
BACKUP_FILE_PATH="<path-to-json-backup-file>"

# Drop the specified collection in the specified database
docker exec -it $DOCKER_CONTAINER_NAME mongo --eval "db.getSiblingDB('$DATABASE_NAME').$COLLECTION_NAME.drop()"

# Import the JSON backup file into the specified collection
docker exec -i $DOCKER_CONTAINER_NAME mongoimport --db $DATABASE_NAME --collection $COLLECTION_NAME --drop --jsonArray < $BACKUP_FILE_PATH
