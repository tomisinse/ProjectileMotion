# Projectile Motion Simulator

An interactive browser simulation of projectile motion. Set an initial velocity and launch angle, press Start, and watch the projectile follow its arc under gravity.

Built with [p5.js](https://p5js.org/), plain HTML, and CSS. There is no build step and nothing to install.

## Features

- Adjustable initial velocity (m/s) and launch angle (degrees)
- Start and Reset controls
- Animation stops when the projectile lands
- Light and dark theme that follows your system setting
- Responsive layout that works on phones

## Getting started

1. Download or clone this repository:
   ```bash
   git clone https://github.com/tomisinse/ProjectileMotion.git
   ```
2. Open `index.html` in your browser.

An internet connection is needed the first time, because p5.js loads from a CDN.

## How to use

1. Enter an initial velocity and a launch angle.
2. Click **Start** to launch the projectile.
3. Click **Reset** to return it to the starting position, then try new values.

## The physics

The simulation uses the standard equations for motion under constant gravity, with `g = 9.8 m/s²`:

```
x(t) = v · cos(θ) · t
y(t) = v · sin(θ) · t − ½ · g · t²
```

where `v` is the initial velocity, `θ` is the launch angle, and `t` is time in seconds. Air resistance is ignored.

Positions are drawn directly in pixels, so 1 metre equals 1 pixel. High velocities will carry the projectile off the edge of the canvas.

## Project structure

```
├── index.html   # Page structure and controls
├── styles.css   # Layout, colours, and dark mode
└── sketch.js    # p5.js simulation logic and drawing
```

## Ideas for improvement

- Draw a trail showing the projectile's path
- Display range, maximum height, and time of flight
- Add a scale so large launches stay on screen
- Consider air resistance as a factor
