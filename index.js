#!/usr/bin/env node
require('colors');
module.exports = (n) => {

  var week = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  var d1, d2, d3, d4, d5, d6, today;
  var c = n; // 0-6
  var err = false;
  var error = new Error(`Invalid Input: ${n}`.yellow, 'index.js', 2);

  if ( typeof n === 'string' ) {
    today = n;
  } else if (typeof n === 'number' && n <= 6 ) {
    today = week[ c ];
  } else {
    err = true;
  }

  if (!err) {
    if (today === 'Monday') {
      d1 = 'Tuesday';
      d2 = 'Wednesday';
      d3 = 'Thursday';
      d4 = 'Friday';
      d5 = 'Saturday';
      d6 = 'Sunday';
    } else if (today === 'Tuesday') {
      d1 = 'Wednesday';
      d2 = 'Thursday';
      d3 = 'Friday';
      d4 = 'Saturday';
      d5 = 'Sunday';
      d6 = 'Monday';
    } else if (today === 'Wednesday') {
      d1 = 'Thursday';
      d2 = 'Friday';
      d3 = 'Saturday';
      d4 = 'Sunday';
      d5 = 'Monday';
      d6 = 'Tuesday';
    } else if (today === 'Thursday') {
      d1 = 'Friday';
      d2 = 'Saturday';
      d3 = 'Sunday';
      d4 = 'Monday';
      d5 = 'Tuesday';
      d6 = 'Wednesday';
    } else if (today === 'Friday') {
      d1 = 'Saturday';
      d2 = 'Sunday';
      d3 = 'Monday';
      d4 = 'Tuesday';
      d5 = 'Wednesday';
      d6 = 'Thursday';
    } else if (today === 'Saturday') {
      d1 = 'Sunday';
      d2 = 'Monday'
      d3 = 'Tuesday';
      d4 = 'Wednesday';
      d5 = 'Thursday';
      d6 = 'Friday';
    } else if (today === 'Sunday') {
      d1 = 'Monday';
      d2 = 'Tuesday';
      d3 = 'Wednesday';
      d4 = 'Thursday';
      d5 = 'Friday';
      d6 = 'Thursday';
    }

    var nWeek = [
      today,
      d1,
      d2,
      d3,
      d4,
      d5,
      d6
    ];
    return nWeek;
  } else {
    if (n > 6) {
      throw new Error('Max input is 6!'.yellow, 'index.js', 2);
    } else {
      throw error
    }
  }
}
