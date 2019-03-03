---
layout: post
title: "Gnome Reddit Wallpaper"
tags: [project, python, linux, gnome]
github: "https://github.com/Appropriately/gnome-reddit-wallpaper"
---

### About 

A python script which by default will retrieve the top image of the day from https://www.reddit.com/r/EarthPorn/ and sets it as the wallpaper in the GNOME windows manager.

It also contains an optional redditwallpaper.desktop file that can be placed inside of the .config/autostart folder, that retrieves a new wallpaper on start up.  This file can be modified to change what subreddit the image is grabbed from.

It was initial thrown together in a short amount of time for a friend one evening. However, it is built to handle some weird scenarios such as the post on reddit not actually being an image.

### How it was built

I decided to work on this after discovering the "Python Reddit API Wrapper" (i.e. [praw](https://praw.readthedocs.io/en/latest/)). Originally it was built on a `Python 3.6`, but was later modified to support `Python 2.7` which comes as standard for most environments.

### Example uses

Traditionally, the command after installation can be run like so:

```bash
redditwallpaper
```

This command can be modified using command line options. These are:

* `--overwrite` Allows overwriting of the image, regardless of whether there is already one saved.
* `--sub <name>` Without this it will default to r/earthporn but a different subreddit can be specified.
* `--time <time>` Defaults to the best of the 'day' but other options exist e.g. 'all', 'year', 'month'.

For example: to get the best photo from `r/wallpapers` of all time, you can use the following command:

```bash
redditwallpaper --sub wallpapers --time all
```