// ----------------------------------------------------------------------------
// Color
// ----------------------------------------------------------------------------

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
  rgb = rgb.map(c => {
    return Math.round(c * 250 / Math.max(...rgb))
  })
  return rgbToHex(rgb[0], rgb[1], rgb[2])
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
  return rgbToHex(rgb[0], rgb[1], rgb[2])
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

export {
    getColorByPosition,
    colorToPureColor,
    getColorPosition
}