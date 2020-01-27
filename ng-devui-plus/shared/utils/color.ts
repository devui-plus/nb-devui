
// ----------------------------------------------------------------------------
// Functions
// ----------------------------------------------------------------------------

/**
 * Map pure(top right) color to the pointed color
 *
 * @param   {string} hex
 * @param   {number} x        from 0 to 1
 * @param   {number} y        from 0 to 1
 * @return  {object}          rgb
 */
function mapInPanel(hex, x, y) {
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
 * Get Pure Color
 *
 * @param   {string} hex
 * @param   {number} x        from 0 to 1
 * @param   {number} y        from 0 to 1
 * @return  {object}          rgb
 */
function pureColorHex(hex) {
  var rgb = hexToRgb(hex)
  // remove white
  rgb = rgb.map(c => {
    return c - Math.min(...rgb)
  })
  // remove black
  rgb = rgb.map(c => {
    return Math.round(c * 250 / Math.max(...rgb))
  })
  return rgbToHex(rgb[0], rgb[1], rgb[2])
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
    mapInPanel,
    pureColorHex
}