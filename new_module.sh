#!/usr/bin/env bash

cd app

mkdir $1
cd $1

mkdir controllers
mkdir views
mkdir stylesheets
touch index.js
touch routes.js

cd ..