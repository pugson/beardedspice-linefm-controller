//
//  Linefm.m
//  BeardedSpice
//
BSStrategy = {
  version: 1.1,
  displayName: "Line.fm",
  accepts: {
    method: "predicateOnTab",
    format: "%K LIKE[c] '*line.fm*'",
    args: ["URL"]
  },
  isPlaying: function () { return document.querySelector('.bs-playing') ? true : false },
  toggle: function () { return document.querySelector('#bs-play-pause').click() },
  next: function () { return document.querySelector('#bs-next-track').click() },
  pause: function () { return document.querySelector('.bs-playing').click() },
}