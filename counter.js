let counter = 0;

export function increment() {
  return counter++;
}

export function reset() {
  counter = 0;
  return counter;
}
