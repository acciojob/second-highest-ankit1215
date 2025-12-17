function secondHighest() {
  let n = Number(prompt());

  if (n <= 1) {
    alert(-Infinity);
    return;
  }

  let highest = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < n; i++) {
    let num = Number(prompt());

    if (num > highest) {
      second = highest;
      highest = num;
    } else if (num < highest && num > second) {
      second = num;
    }
  }

  alert(second === -Infinity ? -Infinity : second);
}

// REQUIRED: function call
secondHighest();
