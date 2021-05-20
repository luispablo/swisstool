# swisstool
Small helper functions needed in every project

## asyncFilter

```javascript
  const items = [1, 2, 3, 4];
  const isEven = n => new Promise(res => res(n % 2 === 0));
  const evenNumbers = await asyncFilter(items, isEven);
  // [2, 4]
```

## wait

```javascript
const { wait } = require("scraping-toolbox");

// Wait 80ms, plus a random number between 0 and 20 additional milliseconds
await wait(80, 20); 
```
