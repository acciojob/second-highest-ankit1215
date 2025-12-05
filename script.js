function secondHighest() {
  let n = Number(prompt()); // number of inputs

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

  if (second === -Infinity) {
    alert(-Infinity);
  } else {
    alert(second);
  }
}

// REQUIRED: CALL THE FUNCTION so Cypress sees the alert
secondHighest();
