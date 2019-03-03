---
layout: post
title: "Markdown Reader"
tags: [project, web, bootstrap, markdown]
github: "https://github.com/Appropriately/markdown-reader"
site: "https://appropriately.github.io/markdown-reader/"
---

## About

*ANOTHER* Markdown Reader. I wanted something to put together to host my own notes online. It is built using **Showdown JS**, which is a JavaScript library that allows markdown to be easily converted into HTML. An additional plugin for Showdown JS, called **showdown-toc**, was used for generating table of contents.

![Pixel miner's main view](/assets/images/markdown-reader.png)

## Features

* Markdown -> HTML conversion.
* Python script for grabbing files to be displayed, pulling meta-data and creating the JSON file the markdown-reader will use.
* A dark mode for people who like their eyes.
* Hsa permalinks to files.

## How it was built

* [Bootstrap 4](https://getbootstrap.com/)
* [Font Awesome](https://fontawesome.com/)
* [Showdown JS](https://github.com/showdownjs/showdown)
* [showdown-toc](https://github.com/ravisorg/showdown-toc)