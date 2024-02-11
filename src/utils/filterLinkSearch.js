export function filterLinkSearch(items, keyword) {
  console.log(items, keyword);
  const lowered = keyword.toLowerCase();
  return items.filter(({ description }) =>
    description?.toLowerCase().includes(lowered)
  );
}
