//Solution 1

const largestNumber = (magnitude) => {
  if (magnitude >= 0) {
    return Number('9'.repeat(magnitude));
  }
  return Number('.' + '9'.repeat(-magnitude));
}



//Solution 2
