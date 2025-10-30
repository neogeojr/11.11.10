const items = ["apples", "eggs", "detergent", "milk", "bread"];

export const addItem = (item) => {
  items.push(item);
  listItems(`Item added: ${item}`);
};

export function removeItem(enteredIndex) {
  if ( !Number.isInteger(enteredIndex) || !(enteredIndex >= 0 &&  enteredIndex < items.length) ) {
    listItems(`\nPlease enter a valid index integer to remove an item; No item removed.`);
  } else {
    const removedItem = items[enteredIndex];
    items.splice(enteredIndex, 1);
    listItems(`\nItem removed: ${removedItem}`);
  }
}

export function listItems(note = "") {
  console.log(`${note}\nCurrent Items List:`);
  items.forEach((item, index) => console.log(`${index} - ${item}\n`));
}
