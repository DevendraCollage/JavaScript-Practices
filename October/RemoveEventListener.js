// Write a JavaScript program to remove an event listener from an element.

const off = (el, evt, fn, opts = false) => {
  el.removeEventListener(evt, fn, opts);
};

const fn = () => console.log("!");

document.body.addEventListener("click", fn);

console.log(off(document.body, "click", fn));
