// 1

function durationBetweenDates(startDate = '2023-01-01', endDate = '2023-01-02', dimension = 'days') {
    const startDateTime = new Date(startDate);
    const endDateTime = new Date(endDate);
  
    const timeDiff = Math.abs(endDateTime - startDateTime); 
  
    switch (dimension) {
      case 'seconds':
        return timeDiff / 1000;
      case 'minutes':
        return timeDiff / (1000 * 60);
      case 'hours':
        return timeDiff / (1000 * 60 * 60);
      default: 
        return timeDiff / (1000 * 60 * 60 * 24);
    }
  }
  
  console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds'));  // поверне '86400 seconds'
  console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days'));  // поверне '362 days'

// 2

function optimizer(data) {
    const formattedObj = {};
  
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const formattedKey = key.toLowerCase();

        const formattedValue = Number(data[key]).toFixed(2);
  
        formattedObj[formattedKey] = formattedValue;
      }
    }
  
    return formattedObj;
  };
  
  const data = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
    };
  
  const formattedObj = optimizer(data);
  console.log(formattedObj);

  // 3

  function recursiveOddSumTo(n) {
    if (n <= 0) {
      return 0;
    };

    if (n === 1) {
      return 1;
    };

    let nearestOdd = n;
    if (n % 2 === 0) {
      nearestOdd = n - 1;
    }

    return nearestOdd + recursiveOddSumTo(nearestOdd - 2);
  };
  console.log(recursiveOddSumTo(1));
  console.log(recursiveOddSumTo(10));
  console.log(recursiveOddSumTo(78));
  
  // 4
 
  function iterativeOddSumTo(x) {
    if (x <= 0) {
      return 0;
    }
  
    let totalSum = 0;
    for (let i = 1; i <= x; i += 2) {
      totalSum += i;
    }
  
    return totalSum;
  }
  
  console.log(iterativeOddSumTo(1))
  console.log(iterativeOddSumTo(10));