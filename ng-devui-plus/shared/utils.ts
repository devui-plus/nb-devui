export function saveRecentColors(recentColors: string[], currentColor: string, limit: number) {
  const indexOfCurrent = indexOfColor(recentColors, currentColor);
  if ((indexOfCurrent >= 0)) {
    recentColors.splice(indexOfCurrent, 1);
  }
  recentColors.unshift((currentColor));
  if (recentColors.length > limit) {
    recentColors.splice(limit, 1);
  }
  return;
}

function indexOfColor(recentColors: string[], currentColor: string) {
  for (let i = 0; i < recentColors.length; i++) {
    if (hexColorSpread(recentColors[i]) === hexColorSpread(currentColor)) {
      return i;
    }
  }
  return -1;
}

/**
 * Spread hex color. e.g. '#fff' => '#ffffff'
 */
function hexColorSpread(color: string) {
  const colorArr = color.split('');
  if (colorArr.length === 4) {
    for (let i = 3; i > 0; i--) {
      colorArr.splice(i, 0, colorArr[i]);
    }
  }
  color = colorArr.join('');
  return color;
}
