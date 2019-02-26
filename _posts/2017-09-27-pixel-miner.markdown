---
layout: post
title: "Pixel Miner"
background: 'rgb(43, 46, 54) linear-gradient( rgb(43, 46, 54), rgb(78, 82, 94))'
github: 'https://github.com/Appropriately/pixel-miner'
site: 'https://appropriately.github.io/pixel-miner/'
categories: [project, web, game]
---

## About

A "clicker game" I started working on as an excuse to experiment with AngularJS but decided to continue working on it. It was built just before a hackathon, to build up some skills with AngularJS.

The game works like your average 'clicker' game, with a user initially gathering 'pixels' by clicking. Once they have gathered enough, they are capable of buying a 'building' to automatically gather some pixels per second. 'Upgrades' can be bought for both the buildings and the user's clicking, to increase the rate at which they are gathered.

The user data is saved locally, so games can be paused and accessed again. An autosave feature was built to facilitate this.

![Pixel miner's main view](/assets/images/pixel-miner.png)

## JSON

I used JSON to represent the buildings and upgrades. This meant that they could be adjusted quickly and new ones could be added quickly.

An example of the building JSON format:

```json
  {
    "name" : "Auto Miner",
    "type" : "clicker",
    "price" : 10,
    "image" : "http://placehold.it/200x200",
    "alt" : "Clicks for you, pretty simple.",
    "increment" : 1,
    "total": 0
  }
```

## How it was built

It was using the following:

* font-awesome
* bootstrap
* AngularJS