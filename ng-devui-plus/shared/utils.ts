export function saveRecentColors(recentColors: string[], currentColor: string, limit: number) {
  var indexOfCurrent = indexOfColor(recentColors, currentColor)
  if ((indexOfCurrent >= 0)) {
    recentColors.splice(indexOfCurrent, 1)
  }
  recentColors.unshift((currentColor))
  if (recentColors.length > limit) {
    recentColors.splice(limit, 1)
  }
  return
}

function indexOfColor(recentColors: string[], currentColor: string) {
  for (var i = 0; i < recentColors.length; i++) {
    if (hexColorSpread(recentColors[i]) == hexColorSpread(currentColor))
      return i
  }
  return -1
}

/**
 * Spread hex color. e.g. '#fff' => '#ffffff'
 */
function hexColorSpread(color: string) {
  var colorArr = color.split('')
  if (colorArr.length == 4) {
    for (var i = 3; i > 0; i--) {
      colorArr.splice(i, 0, colorArr[i])
    }
  }
  color = colorArr.join('')
  return color
}