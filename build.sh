cd client
npm run build
cp -r build ./../server/src
cd ..
cd server/src
mv build client

docker build --pull --rm -f "server/Dockerfile" -t pomodoro:latest "server" 