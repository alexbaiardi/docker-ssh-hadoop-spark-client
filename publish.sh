#!/bin/bash
set -exo
version=$1
username=$2
repository=$3
cd image
for v in "${version}" "latest"
do
    echo $v
    docker build -t ${repository}:${v} --progress=plain . &> build.log
    docker tag ${repository}:${v} ${username}/${repository}:${v}
    docker push ${username}/${repository}:${v}
done
cd -