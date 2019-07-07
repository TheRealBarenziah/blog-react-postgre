#!/bin/bash
cd ./frontend/
yarn
yarn lint
cd ../backoffice/
yarn
yarn lint
cd ../backend
yarn
yarn test:check-coverage