function joinOr(array, deliminator = ", ", junction = "or ") {
  if (array.length === 1) return array;
  if (array.length === 2) return `${array[0]} ${junction} ${array[1]}`;

  let finalTwo = `${array.at(-2)}${deliminator} ${junction} ${array.at(-1)}`;
  return `${array.splice(0, array.at(-3)).join(deliminator)}${deliminator} ${finalTwo}`;
}

// obj is the context for `joinOr`; replace it with the correct context.
joinOr([1, 2]); //?
// # => "1 or 2"
joinOr([1, 2, 3]); //?
// # => "1, 2, or 3"
joinOr([1, 2, 3], "; "); //?
// # => "1; 2; or 3"
joinOr([1, 2, 3, 1, 2, 31, 2, 3], ", ", "and"); //?
// # => "1, 2, and 3"
