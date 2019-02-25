#!/bin/bash
docker rm /portfolio
docker run --name portfolio --volume="$PWD:/srv/jekyll" -p 3002:4000 -it jekyll/jekyll jekyll serve --watch --drafts