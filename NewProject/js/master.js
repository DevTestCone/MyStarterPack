"use strict"

const canvas = document.createElement("canvas");
canvas.id = "canvas";
document.body.appendChild(canvas);

const c = document.getElementById("canvas");
// Cross-browser
const width = c.width = window.innerWidth || document.documentElement.clientWidth ||
  document.body.clientWidth;
const height = c.height = window.innerHeight || document.documentElement.clientHeight ||
  document.body.clientHeight;
const ctx = c.getContext("2d");
