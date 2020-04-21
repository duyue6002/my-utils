const _ = window._;
const container = document.body;

console.log(_.debounce);

container.addEventListener(
  'mousemove',
  _.debounce(
    () => {
      console.log('move');
    },
    1000,
    false
  )
);
