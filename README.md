# waffle
# open you docker
bash
`
docker build -t nextjs_docker:dev .
docker run --publish 3000:3000 nextjs_docker:dev
`