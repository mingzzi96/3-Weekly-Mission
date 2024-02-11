export function filterLinkSearch(items, keyword) {
  const lowered = keyword.toLowerCase();
  return items.filter(({ description }) =>
    description?.toLowerCase().includes(lowered)
  );
}
