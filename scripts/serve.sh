#!/bin/bash
# From within the container, serve the jekyll site. This will build it, then 
# whenever a file is changed rebuild.
docker rm /portfolio
docker run --name portfolio --volume="$PWD:/srv/jekyll" -p 3002:4000 -it jekyll/jekyll jekyll serve --watch --drafts