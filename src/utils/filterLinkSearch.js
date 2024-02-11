export function filterLinkSearch(items, keyword) {
  console.log(items, keyword);
  const lowered = keyword.toLowerCase();
  return items.filter(
    ({ description, title, url }) =>
      description?.toLowerCase().includes(lowered) ||
      title?.toLowerCase().includes(lowered) ||
      url?.toLowerCase().includes(lowered)
  );
}
