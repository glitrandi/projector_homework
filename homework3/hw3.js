function addThemAll(...args) {
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return sum;
}

console.log(addThemAll(2,4)); // 6
console.log(addThemAll(1,2,3,4)); // 10
console.log(addThemAll(5,5,10)); // 20

//2

function multiply(a) {
    return function(b) {
        return a*b;
    }
}

console.log(multiply(5)(5))		// 25
console.log(multiply(2)(-2))	// -4
console.log(multiply(4)(3))		// 12

//3

function byProperty(property, direction) {
    return function (a, b) {
      if (direction === '>') {
        return a[property] - b[property];
      } else if (direction === '<') {
        return b[property] - a[property];
      }
    };
  }
  
  const movies = [
	{
		movieName: 'The Thing',
		releaseYear: 1982,
		directedBy: 'Carpenter',
		runningTimeInMinutes: 109,
	},
	{
		movieName: 'Aliens',
		releaseYear: 1986,
		directedBy: 'Cameron',
		runningTimeInMinutes: 137,
	},
	{
		movieName: 'Men in Black',
		releaseYear: 1997,
		directedBy: 'Sonnenfeld',
		runningTimeInMinutes: 98,
	},
	{
		movieName: 'Predator',
		releaseYear: 1987,
		directedBy: 'McTiernan',
		runningTimeInMinutes: 107,
	},
];
  
  Array.prototype.toSorted = function (property, direction) {
    const copy = this.slice();
    return copy.sort(byProperty(property, direction));
  };
  
  console.log(movies.toSorted('releaseYear', '>'));
  console.log(movies.toSorted('runningTimeInMinutes', '<'));
  console.log(movies.toSorted('movieName', '>'));


// 4

function filterUnique(array) {
    const uniqueSet = new Set(array);
    const uniqueArr = Array.from(uniqueSet);
    return uniqueArr;
  }
  
  const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];
  console.log(filterUnique(userNames)); // ['Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];