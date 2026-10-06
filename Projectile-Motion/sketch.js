let velocity, angle, g, time, projectile;
let started = false;

// Read a colour from the CSS variables so the canvas follows light/dark mode
function themeColor(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function setup() {
  createCanvas(800, 400);
  g = 9.8; // Gravity in m/s²
  resetSimulation();
}

function draw() {
  clear(); // Transparent, so the CSS canvas background shows through

  if (started) {
    time += 0.05; // Increment time
    let x = velocity * cos(angle) * time; // Horizontal position
    let y = velocity * sin(angle) * time - 0.5 * g * pow(time, 2); // Vertical position

    if (y >= 0) {
      projectile.x = x;
      projectile.y = height - y; // Invert y-axis for canvas
    } else {
      started = false; // Stop animation when projectile hits ground
    }
  }

  // Draw ground
  stroke(themeColor('--ink'));
  strokeWeight(2);
  line(0, height, width, height);

  // Draw projectile
  fill(themeColor('--accent'));
  noStroke();
  ellipse(projectile.x, projectile.y, 20, 20);
}

function startSimulation() {
  velocity = parseFloat(document.getElementById('velocity').value);
  angle = radians(parseFloat(document.getElementById('angle').value));
  time = 0;
  started = true;
}

function resetSimulation() {
  projectile = { x: 0, y: height };
  time = 0;
  started = false;
}