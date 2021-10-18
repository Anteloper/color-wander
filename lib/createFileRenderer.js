var Canvas = require('canvas');
var Image = Canvas.Image;
var assign = require('object-assign');

var path = require('path');
var createRenderer = require('./createRenderer');
var fs = require('fs');

module.exports = async function (opt, cb) {
  var renderer;
  var pixelRatio = typeof opt.pixelRatio === 'number' ? opt.pixelRatio : 1;
  var canvas = new Canvas.createCanvas(opt.width * pixelRatio, opt.height * pixelRatio);
  var context = canvas.getContext('2d');

  var steps = opt.steps;
  var seedName = typeof opt.seedName !== 'undefined' ? ('_' + opt.seedName) : '';
  var filename = (opt.filename || 'render') + seedName;
  var outputDir = opt.outputDir || process.cwd();
  var frame = 0;
  var interval = typeof opt.interval === 'number' ? opt.interval : 0.0001;
  var cwd = opt.cwd || process.cwd();

  await fs.readFile(path.resolve(cwd, opt.backgroundSrc), (err, buffer) => {
    if (err) return cb(err);
    var backgroundImage = new Image();
    backgroundImage.src = buffer;

    renderer = createRenderer(assign(opt, {
      backgroundImage: backgroundImage,
      context: context
    }));

      filePath = outputCanvas(()=>{});
      render();
  });
  return getOutputPath()

  function render () {
    renderer.clear();
    for (var i = 0; i < steps; i++) {
      renderer.step(interval);
      frame++;
    }
    outputCanvas(()=>{});
  }

  function getOutputPath () {
    return path.resolve(outputDir, filename + '.png');
  }

  function outputCanvas (cb) {
    var filePath = getOutputPath()
    fs.writeFile(filePath, canvas.toBuffer(), cb);
  }
};
