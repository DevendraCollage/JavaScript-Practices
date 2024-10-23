// Write a JavaScript program to nest a given flat array of objects linked to one another recursively.

// Note: Useful for nesting comments, such as the ones on reddit.com.

const nest = (items, id = null, link = "parent_id") =>
  items
    .filter((item) => item[link] === id)
    .map((item) => ({ ...item, children: nest(items, item.id) }));

const comments = [
  { id: 1, parent_id: null },
  { id: 2, parent_id: 1 },
  { id: 3, parent_id: 1 },
];

const nestedComments = nest(comments);

console.log(nestedComments);
