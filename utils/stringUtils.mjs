let newName = [];
export const capitalizeName = (string) => {
  const spaceIndex = string.indexOf(" ");
  console.log(
    string.charAt(0).toUpperCase() +
      string.slice(1, spaceIndex + 1) +
      string.charAt(spaceIndex + 1).toUpperCase() +
      string.slice(spaceIndex + 2)
  );
};
 