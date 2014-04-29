/**
 * Created by Sean on 4/29/14.
 */

describe("parseString", function(){
  var string;
  it("~'shan'", function() {
    string = 'shan';
    var actualResult = parseString(string);
    var expectedResult = [
      {
        start: 's',
        matches: ['s'],
        preferred: 0
      },
      {
        start: 'h',
        matches: ['h'],
        preferred: 0
      },
      'a',
      {
        start: 'n',
        matches: ['n'],
        preferred: 0
      }
    ];
    expect(actualResult).toEqual(expectedResult);
  });
  it("~'he'", function(){
    string = 'he';
    var actualResult = parseString(string);
    var expectedResult = [
      {
        start: 'h',
        matches: ['h', 'he'],
        preferred: 0
      },
      'e'
    ];
    expect(actualResult).toEqual(expectedResult);
  });
});

describe("rearrange", function(){
  stylishObj = [
    {
      start: 'n',
      matches: ['n', 'na'],
      preferred: 1
    },
    {
      start: 'a',
      matches: ['as'],
      preferred: 0
    },
    {
      start: 's',
      matches: ['s'],
      preferred: 0
    }
  ];
  it("~choose 'as'", function(){
    rearrange(1, 0);
    expect(stylishObj[0]['preferred']).toBe(0);
  });
});

describe("displayStylishString", function(){
  stylishObj = [
    {
      start: 'n',
      matches: ['n', 'na'],
      preferred: 0
    },
    {
      start: 'a',
      matches: ['as'],
      preferred: -1
    },
    {
      start: 's',
      matches: ['s'],
      preferred: 0
    }
  ];

  console.log(displayStylishString());
});