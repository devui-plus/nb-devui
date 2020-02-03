// ----------------------------------------------------------------------------
// Color
// ----------------------------------------------------------------------------

/**
 * Get Color by Pointer Position in Slider
 *
 * @param   {number} x        from 0 to 1
 * @return  {string}          hex
 */
function getColorByPointerPositionInSlider(x) {
  var sliderColors = ['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff', '#ff0000']
  var rgb = hexToRgb(sliderColors[0])
  // Write your code here
  return rgbToHex.apply(null, rgb)
}

/**
 * Get Pointer Position in Slider by Color
 *
 * @param   {string} hex      hex color
 * @return  {number}          from 0 to 1
 */
function getPointerPositionInSliderByColor(hex) {
  var sliderColors = ['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff', '#ff0000']
  var x = 0
  // Write your code here
  return x
}

/**
 * Color to Pure Color
 *
 * @param   {string} hex      hex color
 * @param   {number} x        from 0 to 1
 * @param   {number} y        from 0 to 1
 * @return  {string}          hex
 */
function colorToPureColor(hex) {
  var rgb = hexToRgb(hex)
  rgb = rgb.map(c => {
    return c - Math.min(...rgb)
  })
  // if the input hex is white/gray/black
  if (sum(rgb) == 0)
    return '#ffffff'
  rgb = rgb.map(c => {
    return Math.round(c * 250 / Math.max(...rgb))
  })
  // HACK: rgbToHex(...rgb) not working, and i have no idea of it.
  return rgbToHex.apply(null, rgb)
}

/**
 * Map pure(top right) color to the pointed color
 *
 * @param   {string} hex      hex color
 * @param   {number} x        from 0 to 1
 * @param   {number} y        from 0 to 1
 * @return  {string}          hex
 */
function getColorByPosition(hex, x, y) {
  var rgb = hexToRgb(hex)
  // add white
  rgb = rgb.map(c => {
    return c + (255 - c) * (1 - x)
  })
  // add black
  rgb = rgb.map(c => {
    return Math.round(c * (1 - y))
  })
  return rgbToHex.apply(null, rgb)
}

/**
 * Get the color position in the panel
 *
 * @param   {string} hex      hex color
 * @return  {object}          position
 */
function getColorPosition(hex) {
  var rgb = hexToRgb(hex)
  var x, y = 0
  x = 1 - Math.min(...rgb) / 255
  y = 1 - Math.max(...rgb) / 255
  return {
    x,
    y
  }
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : null
}

function sum(nums) {
  var sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  return sum
}

export {
    getColorByPosition,
    colorToPureColor,
    getColorPosition,
    getColorByPointerPositionInSlider,
    getPointerPositionInSliderByColor
}