const _ = window._;
const container = document.body;

console.log(_.throttle);

container.addEventListener(
  'mousemove',
  _.throttle(
    () => {
      console.log('move');
    },
    1000,
    { trailing: false }
  )
);
