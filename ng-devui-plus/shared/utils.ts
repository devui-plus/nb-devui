export function saveRecentColors(recentColors: string[], currentColor: string, limit: number) {
  if (colorExisted(recentColors, currentColor))
    return
  else
    recentColors.unshift((currentColor))
  if (recentColors.length > limit) {
    recentColors.splice(limit, 1)
  }
  return
}

function colorExisted(recentColors: string[], currentColor: string) {
  for (const color of recentColors) {
    if (colorSpread(color) == colorSpread(currentColor))
      return true
  }
  return false
}

function colorSpread(color: string) {
  var colorArr = color.split('')
  if (colorArr.length == 4) {
    for (var i = 3; i > 0; i--) {
      colorArr.splice(i, 0, colorArr[i])
    }
  }
  color = colorArr.join('')
  return color
}