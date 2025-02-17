const cantons = ['ag', 'ar', 'bl', 'fr', 'gl', 'ju', 'ne', 'ow', 'sh', 'sz', 'ti', 'vd', 'zg', 'ai', 'be', 'bs', 'ge', 'gr', 'lu', 'nw', 'sg', 'so', 'tg', 'ur', 'vs', 'zh'];

const getFlagPath = function(canton) {
  return `./img/${canton}.png`;
}
cantons.sort(()=> 0.5 - Math.random());
const cantonsPick = cantons.slice(0, 10);



document.addEventListener('DOMContentLoaded', function() {
  const playground = document.getElementById('playground');
  cantonsPick.forEach(function(value) {
    const tile = document.createElement('div');
    const tileImage = document.createElement('img');
    tileImage.setAttribute('src', getFlagPath(value));
    tile.appendChild(tileImage);
    playground.appendChild(tile);
    const clone = tile.cloneNode(true);
    playground.appendChild(clone);  
  });
});







