# ChartMuseum GUI

A simple SvelteKit GUI for [ChartMuseum](https://chartmuseum.com/)

## Usage

This application is meant to be run as a Docker container:

```
docker run \
  -p 3000:3000 \
  -e PUBLIC_CHARTMUSEUM_URL=<URL OF CHARTMUSEUM> \
  moreillon/chartmuseum-gui
```

For docker-compose, please see the sample file in this repository
