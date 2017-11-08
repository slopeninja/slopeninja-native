function normalizeResorts(resorts, favoriteResortShortNames = []) {
  // extract non-favorite resorts
  const restResorts = [...resorts].filter(
    resort => !favoriteResortShortNames.includes(resort.shortName),
  ).sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  // make a list of favorite resorts to prepend
  const favoriteResorts = favoriteResortShortNames.map(
    resortShortName => resorts.find(
      resort => resort.shortName === resortShortName,
    ),
  );

  return [...favoriteResorts, ...restResorts];
}

export default normalizeResorts;
