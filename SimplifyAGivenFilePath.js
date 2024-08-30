// Write a JavaScript program to simplify a given absolute path for a file in Unix-style.

function simplifyPath(main_path) {
  // Splitting path in part
  var parts = main_path.split("/"),
    new_path = [],
    length = 0;

  // Loop through path
  for (var i = 0; i < parts.length; i++) {
    var part = parts[i];

    if (part === "." || part === "" || part === "..") {
      if (part === ".." && length > 0) {
        length--;
      }
      continue;
    }

    new_path[length++] = part;
  }

  if (length === 0) {
    return "/";
  }

  // Reconstructing path
  var result = "";
  for (var i = 0; i < length; i++) {
    result += "/" + new_path[i];
  }

  return result;
}

console.log(simplifyPath("/home/var/./www/../html//sql/"));
