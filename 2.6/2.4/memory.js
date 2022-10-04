const cantons = ['ag', 'ar', 'bl', 'fr', 'gl', 'ju', 'ne', 'ow', 'sh', 'sz', 'ti', 'vd', 'zg', 'ai', 'be', 'bs', 'ge', 'gr', 'lu', 'nw', 'sg', 'so', 'tg', 'ur', 'vs', 'zh'];

const getFlagPath = function(canton) {
  return `./img/${canton}.png`;
}
cantons.sort(()=> 0.5 - Math.random());
const cantonsPicks = cantons.slice(0, 10);
const cantonsCopies = [...cantons];
for (cantonCopy of cantonsCopies) {
  cantons.append(cantonCopy);}




document.addEventListener('DOMContentLoaded', function() {
  const playground = document.getElementById('playground');
  cantonsPicks.forEach(function(value) {
    const tile = document.createElement('div');
    const tileImage = document.createElement('img');
    tileImage.setAttribute('src', getFlagPath(value));
    tile.appendChild(tileImage);
    playground.appendChild(tile);
  });
});






