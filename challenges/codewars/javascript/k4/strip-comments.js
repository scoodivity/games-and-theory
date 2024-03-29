'use strict';

/**
 * Returns the input str stripped of any text following the specified comment
 * markers.
 */
function solution(text, markers) {
  const specials = '^$.*+?=:|\\/()[]{}';
  if (markers.length) {
    markers = markers
      .map((m) => (specials.includes(m) ? `\\${m}` : m))
      .join('|');

    const pattern = new RegExp(` *(${markers}).*(?=\\n|$)`, 'gu');
    text = text.replaceAll(pattern, '');
  }
  return text.replaceAll(/ +(?=\n|$)/gu, ''); // Removes trailing spaces.
}
