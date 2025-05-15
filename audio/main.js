const audio = document.getElementById('audio');
const visualizer = document.getElementById('visualizer');

const numBars = 64;
for (let i = 0; i < numBars; i++) {
  const bar = document.createElement('div');
  bar.className = 'bar';
  visualizer.appendChild(bar);
}
const bars = document.getElementsByClassName('bar');

const ctx = new (window.AudioContext || window.webkitAudioContext)();
const analyser = ctx.createAnalyser();
analyser.fftSize = 128;
const source = ctx.createMediaElementSource(audio);
const dataArray = new Uint8Array(analyser.frequencyBinCount);

source.connect(analyser);
analyser.connect(ctx.destination);

function animate() {
  requestAnimationFrame(animate);
  analyser.getByteFrequencyData(dataArray);
  for (let i = 0; i < bars.length; i++) {
    const height = (dataArray[i] / 255) * 100;
    bars[i].style.height = `${height}%`;
  }
}

audio.onplay = () => {
  ctx.resume();
  animate();
};