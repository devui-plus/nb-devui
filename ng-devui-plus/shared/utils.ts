export function saveRecentColors(recentColors: string[], currentColor: string) {
    if (!(recentColors.length && recentColors[0] === currentColor))
      recentColors.unshift((currentColor))
    if (recentColors.length > 9) {
      recentColors = recentColors.slice(0, 9)
    }
    return recentColors;
  }