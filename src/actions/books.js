export function add(book) {
  return { type: "ADD_BOOK", book }
}

export function remove(book) {
  return { type: "REMOVE_BOOK", book }
}