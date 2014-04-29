/**
 * Created by Sean on 4/29/14.
 * Breaking-Bad module for fun.
 */

var elements = ["h","he","li","be","b","c","n","o","f","ne","na","mg","al","si","p","s","cl","ar","k","ca","sc","ti","v","cr","mn","fe","co","ni","cu","zn","ga","ge","as","se","br","kr","rb","sr","y","zr","nb","mo","tc","ru","rh","pd","ag","cd","in","sn","sb","te","i","xe","cs","ba","la","ce","pr","nd","pm","sm","eu","gd","tb","dy","ho","er","tm","yb","lu","hf","ta","w","re","os","ir","pt","au","hg","tl","pb","bi","po","at","rn","fr","ra","ac","th","pa","u","np","pu","am","cm","bk","cf","es","fm","md","no","lr","rf","db","sg","bh","hs","mt","ds","uub","uuq","uuh"];

/* transfer element array into element set */
var elementSet = (function(eles){
  var eleObj = {};
  for (var i in eles) {
    eleObj[eles[i]] = 1;
  }
  return eleObj;
})(elements);

/* A special data structure for parsed string */
var stylishObj = [];

/* The options obj stores any possible combinations of each letter; it also points back to stylishObj */
var options = [];

var _isMatched = function(seg) {
  return (elementSet[seg]) ? 1 : 0;
};

var parseString = function(string) {
  var letters = string.split('');
  var seg = [];
  for (var i = 0; i < letters.length; i++) {
    var matches = [];

    if (_isMatched(letters[i])) {
      matches.push(letters[i]);
    }
    if (letters[i+1]) {
      var twoLetters = letters[i] + letters[i+1];
      if (_isMatched(twoLetters)) {
        matches.push(twoLetters);
      }
      if(letters[i+2]) {
        var threeLetters = twoLetters + letters[i+2];
        if (_isMatched(threeLetters)) {
          matches.push(threeLetters);
        }
      }
    }

    if (matches.length > 0) {
      var startLetter = {
        start: letters[i],
        matches: matches,
        preferred: 0
      };
      seg.push(startLetter);
    } else {
      seg.push(letters[i]);
    }
  }
  return seg;
};

var rearrange = function(index, preferred) {
  /* change the selected one */
  var changedObj = stylishObj[index];
  changedObj.preferred = preferred;

  /* check the possible previous one(s)*/
  var prev = stylishObj[index-1];
  if (typeof prev === 'object') {
    while (prev['matches'][prev['preferred']] && prev['matches'][prev['preferred']].length > 1)
      prev['preferred']--;
  }
  var prev2 = stylishObj[index-2];
  if (typeof prev2 === 'object') {
    while (prev2['matches'][prev2['preferred']] && prev2['matches'][prev2['preferred']].length > 2)
      prev2['preferred']--;
  }
//  options;

};

var displayStylishString = function() {
  for (var j = 0; j < stylishObj.length; j++) {
    var $span = $('<span>');
    if (typeof stylishObj[j] !== 'string') {
      $span.html(stylishObj[j].matches[stylishObj[j].preferred]).addClass('element');
      j += $span.html().length - 1;
    } else {
      $span.html(stylishObj[j]);
    }
    console.log($span.html());
    $('#display').append($span);
  }
  // skip the letters included in the former symbols
  // update the HTML.
};