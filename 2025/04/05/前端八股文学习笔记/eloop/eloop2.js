console.log('Script start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve(
    console.log("Behind Promise")
).then(() => {
  console.log('Promise');
});

console.log('Script end');
