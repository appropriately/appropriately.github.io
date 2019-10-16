---
layout: post
title: "Markdown Reader"
tags: [project, web, bootstrap, markdown]
github: "https://github.com/Appropriately/markdown-reader"
site: "https://appropriately.github.io/markdown-reader/"
---

## About

*ANOTHER* Markdown Reader. I wanted something to put together to host my own notes online. It is built using **Showdown JS**, which is a JavaScript library that allows markdown to be easily converted into HTML.

An additional plugin for Showdown JS, called **showdown-toc**, was used for generating table of contents. This allows table of contents to be dynamically generated using a `[TOC]` tag in markdown. The generated TOC also includes anchor links to the contents of the page.

The web application was initially created for personal note taking, but it proved convenient for converting my **markdown** documentation into HTML.

![Markdown reader](/assets/images/markdown-reader.png)

## Features

* Markdown -> HTML conversion.
* Python script for grabbing files to be displayed, pulling meta-data and creating the JSON file the markdown-reader will use.
* A dark mode for people who like their eyes.
* Has permalinks to files.

## How it was built

* [Bootstrap 4](https://getbootstrap.com/)
* [Font Awesome](https://fontawesome.com/)
* [Showdown JS](https://github.com/showdownjs/showdown)
* [showdown-toc](https://github.com/ravisorg/showdown-toc)