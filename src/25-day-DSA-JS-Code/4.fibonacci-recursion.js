function fibonacci(n) {
  if (n <= 1) return n;

  let prev = 0;
  let curr = 1;
  let next;
  let i = 1;

  while (i < n) {
    next = prev + curr;
    prev = curr;
    curr = next;
    i++;
  }

  return curr;
}
