#!/bin/bash
cd ./frontend/
yarn lint
cd ../backoffice/
yarn lint
cd ../backend
yarn test:check-coverage