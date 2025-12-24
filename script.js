let vibrationInterval;
let randomInterval;

// Function to stop any ongoing vibration
function stopVibration() {
  if (vibrationInterval) {
    clearInterval(vibrationInterval); // Stops the repeating vibration
    navigator.vibrate(0); // Ensure vibration stops immediately
  }
  if (randomInterval) {
    clearInterval(randomInterval); // Stops the random vibration
  }
}

// Constant vibration (simulated with a continuous cycle)
function constantVibration() {
  navigator.vibrate([200, 100, 200, 100]); // Start vibration immediately
  vibrationInterval = setInterval(() => {
    navigator.vibrate([200, 100, 200, 100]); // 200ms vibrate, 100ms pause, repeat
  }, 100); // Repeat every 100ms for a steady vibration
}

// Wave pattern (gradual wave of vibration strength)
function wavePattern() {
  navigator.vibrate([300, 200, 500, 300, 700, 400, 500, 300, 300, 200]); // Start vibration immediately
  vibrationInterval = setInterval(() => {
    navigator.vibrate([300, 200, 500, 300, 700, 400, 500, 300, 300, 200]); // Gradual increase and decrease in strength
  }, 1200); // Repeat every 1200ms for smooth wave pattern
}

// Pulse pattern (rhythmic pulses)
function pulsePattern() {
  navigator.vibrate([500, 250, 500, 250, 500, 250]); // Start vibration immediately
  vibrationInterval = setInterval(() => {
    navigator.vibrate([500, 250, 500, 250, 500, 250]); // Strong bursts with 250ms pauses
  }, 1000); // Repeat every 1000ms for rhythmic pulses
}

// Ramp pattern (slow build-up and decrease)
function rampPattern() {
  navigator.vibrate([100, 50, 150, 75, 200, 100, 250, 150, 300, 200]); // Start vibration immediately
  vibrationInterval = setInterval(() => {
    navigator.vibrate([100, 50, 150, 75, 200, 100, 250, 150, 300, 200]); // Build up and decrease vibration intensity
  }, 1500); // Repeat every 1500ms for gradual ramp effect
}

// Heartbeat pattern (rhythmic, steady pulse)
function heartbeatPattern() {
  navigator.vibrate([250, 400, 250, 400]); // Start vibration immediately
  vibrationInterval = setInterval(() => {
    navigator.vibrate([250, 400, 250, 400]); // Steady heartbeat-like pulse
  }, 650); // Repeat every 650ms for a steady beat
}

// Fireworks pattern (quick bursts)
function fireworksPattern() {
  navigator.vibrate([100, 50, 200, 50, 300, 50, 400, 50]); // Start vibration immediately
  vibrationInterval = setInterval(() => {
    navigator.vibrate([100, 50, 200, 50, 300, 50, 400, 50]); // Quick bursts with varying intensities
  }, 900); // Repeat every 900ms for rapid bursts
}

// Random pattern (random pulses)
function randomPattern() {
  randomInterval = setInterval(() => {
    const randomDuration = Math.floor(Math.random() * 900) + 100; // Random duration between 100ms and 1000ms
    const randomPause = Math.floor(Math.random() * 4900) + 100; // Random pause between 100ms and 5000ms
    navigator.vibrate([randomDuration, randomPause]); // Random vibration and pause
  }, 500); // Repeat every 500ms for unpredictable intervals
}

// Button event listeners
document.getElementById("stopVibration").addEventListener("click", function () {
  stopVibration(); // Stop any ongoing vibration
});

document
  .getElementById("constantVibration")
  .addEventListener("click", function () {
    stopVibration();
    constantVibration();
  });

document.getElementById("wavePattern").addEventListener("click", function () {
  stopVibration();
  wavePattern();
});

document.getElementById("pulsePattern").addEventListener("click", function () {
  stopVibration();
  pulsePattern();
});

document.getElementById("rampPattern").addEventListener("click", function () {
  stopVibration();
  rampPattern();
});

document
  .getElementById("heartbeatPattern")
  .addEventListener("click", function () {
    stopVibration();
    heartbeatPattern();
  });

document
  .getElementById("fireworksPattern")
  .addEventListener("click", function () {
    stopVibration();
    fireworksPattern();
  });

// New random pattern event listener
document.getElementById("randomPattern").addEventListener("click", function () {
  stopVibration();
  randomPattern();
});

// Extra Patterns code
// Function for Pulsing Wave pattern
function pulsingWavePattern() {
  navigator.vibrate([200, 150, 250, 100, 300, 150, 250, 100]); // Start vibration immediately
  vibrationInterval = setInterval(() => {
    navigator.vibrate([200, 150, 250, 100, 300, 150, 250, 100]); // Waves that progressively increase and decrease
  }, 1200); // Repeat every 1200ms
}

// Function for Flutter pattern
function flutterPattern() {
  navigator.vibrate([50, 30, 50, 30, 50, 30, 50, 30]); // Start vibration immediately
  vibrationInterval = setInterval(() => {
    navigator.vibrate([50, 30, 50, 30, 50, 30, 50, 30]); // Rapid light bursts
  }, 200); // Repeat every 200ms for quick flutter effect
}

// Function for Throbbing pattern
function throbbingPattern() {
  navigator.vibrate([500, 1000, 500, 1000]); // Start vibration immediately
  vibrationInterval = setInterval(() => {
    navigator.vibrate([500, 1000, 500, 1000]); // Strong, rhythmic throbbing with long pauses
  }, 3000); // Repeat every 3 seconds
}

// Function for Wobble pattern
function wobblePattern() {
  navigator.vibrate([200, 100, 400, 200, 300, 100, 500, 200]); // Start vibration immediately
  vibrationInterval = setInterval(() => {
    navigator.vibrate([200, 100, 400, 200, 300, 100, 500, 200]); // A smooth up and down wobble
  }, 1500); // Repeat every 1500ms
}

// Function for Flicker pattern
function flickerPattern() {
  navigator.vibrate([100, 50, 100, 50, 100, 50, 100, 50]); // Start vibration immediately
  vibrationInterval = setInterval(() => {
    navigator.vibrate([100, 50, 100, 50, 100, 50, 100, 50]); // Quick bursts that flicker on and off
  }, 400); // Repeat every 400ms
}

// Function for Blip pattern
function blipPattern() {
  navigator.vibrate([50, 50, 50, 50, 50]); // Start vibration immediately
  vibrationInterval = setInterval(() => {
    navigator.vibrate([50, 50, 50, 50, 50]); // Short bursts, each followed by a pause
  }, 500); // Repeat every 500ms for quick "blips"
}

// Button event listeners for new patterns
document
  .getElementById("pulsingWavePattern")
  .addEventListener("click", function () {
    stopVibration();
    pulsingWavePattern();
  });

document
  .getElementById("flutterPattern")
  .addEventListener("click", function () {
    stopVibration();
    flutterPattern();
  });

document
  .getElementById("throbbingPattern")
  .addEventListener("click", function () {
    stopVibration();
    throbbingPattern();
  });

document.getElementById("wobblePattern").addEventListener("click", function () {
  stopVibration();
  wobblePattern();
});

document
  .getElementById("flickerPattern")
  .addEventListener("click", function () {
    stopVibration();
    flickerPattern();
  });

document.getElementById("blipPattern").addEventListener("click", function () {
  stopVibration();
  blipPattern();
});
