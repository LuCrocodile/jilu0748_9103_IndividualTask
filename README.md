# jilu0748_9103_IndividualTask

## Instructions on how to interact with the work

When you open `index.html`, the animation starts automatically. You do not need to press any button to begin. The canvas fills the browser window, and if you resize the window, the scene will also resize to fit. The sky, water, bridge, figures, and expressive lines move on their own over time. The best way to experience the work is simply to watch it for a while and observe how the whole painting slowly shifts, pulses, and flows.

---

## What drives my individual code: Perlin noise and randomness

I use **Perlin noise and randomness** to drive my animation. Perlin noise (`noise()`) is used to create smooth movement in the sky, water, bridge, central figure, and extra lines, while several random seeds generated in `setup()` (`skySeed1`, `waterSeed1`, `bridgeSeed1`, `screamSeed1`, `linesSeed1`) make the exact patterns different each time the sketch runs. The scene moves automatically based on these noise and random values.

---

## Which properties of the image are animated, and how is it unique?

- **Sky bands**  
  The orange and yellow bands in the sky are made from many small rectangles whose vertical positions are modified by `sin`, `cos`, and Perlin noise over time. This makes the sky appear to flow and ripple like moving fire or a melting sunset.

- **Water landscape**  
  The dark middle region, drawn with vertical rectangles, is animated using a combination of waves and noise so that it looks like constantly shifting water or an unstable landscape.

- **Bridge**  
  The whole bridge is rotated to its original angle, but I add a small noise-based rotation offset so it gently sways, as if the entire scene is trembling.

- **Central screaming figure**  
  The body slightly sways left and right, the mouth grows and shrinks, and the concentric ellipses around the head expand and contract, making the scream feel like it is pulsing outward.

- **Additional random lines**  
  I add a new layer of thick, colourful lines whose positions, angles, and opacity change over time, like expressive brush strokes appearing and shifting across the painting.

Compared to other possible approaches, my version is characterised by **continuous global motion** driven by time and noise. The composition and colours remain close to the group’s base image, but almost every part of the scene is gently moving, which makes my submission distinctive.

---

## References and inspirations for animating my individual code

One of my main references was **“Starry Night (interactive animation) for iOS and Android”** by Petros Vrellis  
(YouTube video: <https://www.youtube.com/watch?v=Ph1SEFWcL58>).

In this work, Van Gogh’s *Starry Night* is turned into an interactive, flowing animation where the brush strokes move like streams of particles and react to touch input. The way the original painting is transformed into a living, moving surface inspired me to make the sky and water in *The Scream* feel like they are continuously in motion, rather than just static colour bands. I was especially influenced by the smooth, hypnotic flow of lines and the idea that a famous painting can be reinterpreted through motion instead of only through still shapes.

A related inspiration was the general concept of **flow fields and Perlin-noise-driven motion**, for example, in Daniel Shiffman’s *Coding Challenge #24: Perlin Noise Flow Field* for p5.js  
(<https://www.youtube.com/watch?v=BjoM9oKOAKY>). In this kind of sketch, particles move according to a vector field generated from Perlin noise, creating organic swirling patterns that evolve smoothly over time. This influenced the technical approach I used for the sky, water, and random lines: instead of moving things with simple linear motion, I use noise and waves to create a feeling of turbulent, natural flow across the whole canvas.

---

## Short technical explanation of how my code works

Technically, my animation extends the group’s base code by adding **noise-based animation**. I declare a `time` variable and several random seeds.

- In `setup()`, each seed is assigned a random value using `random(1000)`. These seeds are passed into `noise()` so that each component has its own noise pattern.
- In `draw()`, I call `background(0)`, then increase `time` slightly, and then draw the sky, water, bridge, background figures, screaming figure, and finally a new layer of random lines.

Inside each drawing function, I replace some of the static values from the group code with expressions that include `time` and `noise()`. For example:

- **Sky and water**  
  I add terms like `sin(... + time * speed)` and `noise(..., time * speed)` to the y-coordinates of the rectangles, so the waves move rather than stay frozen.

- **Bridge**  
  I calculate the original bridge angle from its endpoints, then add a small noise-based offset to this angle before drawing the bridge rectangles, which produces a gentle sway.

- **Screaming figure**  
  I use noise to vary the body’s horizontal offset, the mouth’s width and height, and the radii of the concentric ellipses around the head.

- **Random lines**  
  I use noise and the seeds to generate positions, angles, lengths, colours, and opacity values that update over time.

Because Perlin noise changes smoothly as its input changes, the resulting animation is **fluid rather than jittery**.

---

## If you made a lot of changes to the group code, explain them here

I added a completely new function, `drawRandomLines()`, that did not exist in the original group code, which draws animated, colourful lines as an extra expressive layer.

The overall layout and structure of the image remain faithful to the group version, but the behaviour changes from **static** to **fully animated**.
