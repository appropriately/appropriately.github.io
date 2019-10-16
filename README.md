# appropriately.github.io

My portfolio, hosted on GitHub pages.

## Development

This application was built on my work machine, which is restricted. Therefore any code is run within a container. To serve the Jekyll site, the following command can be run:

```bash
bash scripts/serve.sh
```

This script just removes the old image and runs a new one:

```bash
docker run --name portfolio --volume="$PWD:/srv/jekyll" -p 3002:4000 -it jekyll/jekyll jekyll serve --watch --drafts
```
