# Week From Today
Get week days names from today.

**SuperEasy**
```js
  // Modules
  var week = require('weekft');
  var d = new Date();


  var $today = d.getDay(); // ==> 5 (Friday)

  // return week from $today
  week( $today );
  // or from string
  week('Friday')

  // ==> ['Friday', 'Saturday', 'Sunday', 'Monday', etc..] <==

```

## Install
```bash
  $ npm install weekft --global
```

## API | week([input])
Type: `number` or `string` <br>
Return: `array`

---

## Related
- [Splash Cli](https://github.com/rawnly/splash-cli) - Beautiful **unsplash** photos as *your wallpaper*.
- [Splash Desktop](https://github.com/rawnly/splash-desktop) - Desktop version of [Splash Cli](https://github.com/rawnly/splash-cli)
- [ms-c](https://github.com/rawnly/ms-c) Milliseconds Converter with **NodeJS**

<h5 align="center"> A project by <a href="http://rawnly.com">@Rawnly</a> </h5>
