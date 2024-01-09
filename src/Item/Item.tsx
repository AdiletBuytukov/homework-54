const createItems = () => {
  const items: { ring: boolean; isOpen: boolean }[][] = Array.from({length: 6}, () =>
    Array.from({length: 6}, () => ({ring: false, isOpen: false}))
  );

  const randomRowIndex = Math.floor(Math.random() * 6);
  const randomColIndex = Math.floor(Math.random() * 6);
  items[randomRowIndex][randomColIndex].ring = true;

  return items;
};

export default createItems;