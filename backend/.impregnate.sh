#!/bin/bash
if [ -e ./.env ]; then
  echo ".env file detected, proceeding with the script..."
else
  echo "You seem to not have any .env file, should we create it ? (y/n)"
  read -p "y/n : " answer
  if [ $answer = "y" ]; then
    read -p "What is your DB (sql) username ?" username
    read -p "What is your DB (sql) password ?" password
    read -p "What is your DB (sql) name ?" dbname
    touch .env
    echo "
      DB_USERNAME='$username'
      DB_PASSWORD='$password'
      DB_NAME='$dbname'
      DB_HOSTNAME='localhost'
      JWT_SECRET='DanyWonDanyWonDanyWonDanyWonDanyWonDanyWonDanyWonDanyWonDanyWonDanyWonDanyWonDanyWonDanyWonDanyWonDanyWonDanyWonDanyWonDanyWon'
      " >> .env
    echo "./backend/.env created. You may want to custom the JWT_SECRET & DB_HOSTNAME values. 
    Proceeding with the script..."
  else echo 'Proceeding with the script...'
  fi
fi

sequelize db:drop
sequelize db:create
sequelize db:migrate

node ./seeders/00_grades.js
node ./seeders/01_avatars.js
node ./seeders/02_admin_user.js
node ./seeders/03_users.js
node ./seeders/04_blog_posts.js
node ./seeders/05_threads.js
node ./seeders/06_original_posts.js
node ./seeders/07_comments.js
node ./seeders/08_private_messages.js
node ./seeders/09_pictures.js

echo ' '
echo ' '
echo 'Database is now ready to use, everything went fine !'
echo '-----------------------------------------'
echo 'To log as admin: '
echo ' '
echo 'Email : dstormborn@dragonstone.ovl'
echo 'Password : dracarys'
echo '-----------------------------------------'