// Animation variable for sky
let time = 0;
let skySeed1;
let waterSeed1;
let bridgeSeed1;
let screamSeed1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Initialize random seed for sky and water animation
  skySeed1 = random(1000);
  waterSeed1 = random(1000);
  bridgeSeed1 = random(1000);
  screamSeed1 = random(1000);
}

function draw() {
  background(0);

  // Increment time for animation
  time += 0.02;

  drawSky();

  drawWater();

  drawBridge();

  drawBGPeople();

  drawScreamingPeople();
}

function drawSky() {
  // Orange and yellow wavy bands
  for (let i = 0; i < height * 0.4; i += 15) {
    // Use Perlin noise for smooth wave animation
    let wave = sin(i * 0.05 + time * 0.5) * 50;
    let wave2 = cos(i * 0.08 + time * 0.3) * 30;

    // Orange to yellow gradient
    let r = 255 - i * 0.2 + sin(i * 0.1) * 20;
    let g = 150 + i * 0.3 + cos(i * 0.15) * 15;
    fill(r, g, 0, 180);
    noStroke();
    
    // Draw wavy bands using rectangles with animated waves
    for (let x = 0; x < width; x += 5) {
      // Use Perlin noise for smooth horizontal movement
      let noiseX = noise(x * 0.01 + skySeed1, time) * 20;
      let y = i + sin(x * 0.01 + i * 0.05 + time) * 30 + sin(x * 0.02 + i * 0.1 + time * 0.7) * 20 + wave + wave2 + noiseX;
      rect(x, y, 5, 20);
    }
  }
}

function drawWater() {
  // Dark swirling blues and purples with Perlin noise animation
  for (let i = height * 0.4; i < height * 0.7; i += 12) {
    // Animated waves using time
    let wave = sin(i * 0.1 + time * 0.8) * 40;
    let wave2 = cos(i * 0.15 + time * 0.6) * 30;

    // More color variation
    let r = 20 + sin(i * 0.2) * 10;
    let g = 30 + i * 0.3 + cos(i * 0.25) * 15;
    let b = 60 + i * 0.2 + sin(i * 0.3) * 20;
    fill(r, g, b, 160);
    noStroke();

    // Draw wavy water using rectangles with Perlin noise animation
    for (let x = 0; x < width; x += 3) {
      // Use Perlin noise for smooth water flow
      let noiseFlow = noise(x * 0.02 + waterSeed1, time * 0.5) * 15;
      let y = i + sin(x * 0.02 + i * 0.1 + time * 1.2) * 25 + sin(x * 0.03 + i * 0.2 + time * 0.9) * 15 + cos(x * 0.015 + i * 0.12 + time * 0.7) * 10 + wave + wave2 + noiseFlow;
      rect(x, y, 3, height - y);
    }
  }
}


function drawBridge() {
  // Bridge from left middle to bottom middle
  let startX = 0;
  let startY = height * 0.4;
  let endX = width * 0.8;
  let endY = height;
  
  // Calculate distance and angle
  let bridgeLength = dist(startX, startY, endX, endY);
  let angle = atan2(endY - startY, endX - startX);

  // Use Perlin noise for subtle bridge sway
  let bridgeSway = noise(time * 0.2 + bridgeSeed1) * 4 - 2;
  
  push();
  translate(startX, startY);
  rotate(angle + bridgeSway * 0.03);
  
  // Bridge surface
  fill(80, 40, 20, 200);
  noStroke();
  rect(10, 10, bridgeLength, 500);
  rect(-100, -50, bridgeLength + 300, 30);
  rect(-100, 50, bridgeLength + 300, 30);
  rect(-100, 150, bridgeLength + 300, 30);
  rect(-100, 250, bridgeLength + 300, 30);

  // Bridge railings with Perlin noise animation
  stroke(100, 50, 30);
  strokeWeight(4);
  for (let x = 0; x < bridgeLength; x += 20) {
    // Use Perlin noise for slight railing movement
    let railingOffset = noise(x * 0.1 + time * 0.3 + bridgeSeed1) * 4;
    line(x, 10 + railingOffset, x, -20 + railingOffset);
  }

  fill("white")
  rect(-100, 100, bridgeLength + 300, 30);
  rect(-100, 200, bridgeLength + 300, 30);
  rect(-100, -40, bridgeLength + 300, 10);

  pop();
}


function drawBGPeople() {

  fill(20, 30, 50);
  noStroke();

  // First people
  let fig1X = width * 0.1;
  let fig1Y = height * 0.5 + (height * 0.5) * 0.2;
  ellipse(fig1X, fig1Y, 40, 80);
  ellipse(fig1X, fig1Y - 40, 30, 40); 
  ellipse(fig1X, fig1Y - 45, 50, 10); 
  ellipse(fig1X - 8, fig1Y + 40, 10, 60); 
  ellipse(fig1X + 6, fig1Y + 40, 10, 60); 
  
  // Second people
  let fig2X = width * 0.05;
  let fig2Y = height * 0.5 + (height * 0.5) * 0.1;
  ellipse(fig2X, fig2Y, 35, 75);
  ellipse(fig2X, fig2Y - 35, 28, 38);
  ellipse(fig2X, fig2Y - 40, 48, 8);
  ellipse(fig2X - 5, fig2Y + 35, 8, 50);
  ellipse(fig2X + 5, fig2Y + 35, 8, 50);
}


function drawScreamingPeople() {
  push();
  translate(width * 0.5, height * 0.85);
  
  // Use Perlin noise for pulsing scream effect - separate for each effect
  let screamPulse1 = noise(time * 2 + screamSeed1) * 20 + 10;
  let screamPulse2 = noise(time * 1.8 + screamSeed1 + 50) * 15 + 8;
  
  // Use Perlin noise for body sway
  let bodySway = noise(time * 0.6 + screamSeed1) * 3 - 1.5;
  
  // Use Perlin noise for mouth size
  let mouthSize = 35 + noise(time * 3 + screamSeed1) * 10;
  let mouthHeight = 50 + noise(time * 3 + screamSeed1 + 30) * 10;

  // Scream effect 1 with Perlin noise pulsing animation
  noFill();
  stroke(255, 200, 100, 100);
  strokeWeight(3);
  ellipse(0, -60, 120 + screamPulse1, 150 + screamPulse1);
  ellipse(0, -60, 180 + screamPulse1 * 1.2, 220 + screamPulse1 * 1.2);
  ellipse(0, -60, 240 + screamPulse1 * 1.4, 290 + screamPulse1 * 1.4);
  ellipse(0, -60, 300 + screamPulse1 * 1.6, 360 + screamPulse1 * 1.6);
  
  // Scream effect 2 with different Perlin noise pulsing
  stroke(255, 150, 50, 80);
  strokeWeight(2);
  ellipse(0, -60, 150 + screamPulse2, 180 + screamPulse2);
  ellipse(0, -60, 210 + screamPulse2 * 1.3, 250 + screamPulse2 * 1.3);
  ellipse(0, -60, 270 + screamPulse2 * 1.5, 320 + screamPulse2 * 1.5);

  // Body with Perlin noise sway
  fill(30, 40, 60);
  noStroke();
  ellipse(bodySway, 20, 80, 200);
  
  // Head
  fill(200, 220, 150);
  ellipse(bodySway, -60, 70, 90);
  
  // Eyes
  fill(20);
  ellipse(-15 + bodySway, -70, 12, 15);
  ellipse(15 + bodySway, -70, 12, 15);
  
  // Mouth with animated size
  fill(40, 30, 20);
  ellipse(bodySway, -40, mouthSize, mouthHeight);
  
  // Hands on head
  fill(200, 220, 150);
  ellipse(-45 + bodySway, -75, 25, 40);
  ellipse(45 + bodySway, -75, 25, 40);
  
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}