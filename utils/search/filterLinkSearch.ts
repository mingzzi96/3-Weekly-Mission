interface Item {
  description: string;
  title: string;
  url: string;
}

export function filterLinkSearch(items: Item[], keyword: string) {
  const lowered = keyword.toLowerCase();
  return items.filter(
    ({ description, title, url }) =>
      description?.toLowerCase().includes(lowered) ||
      title?.toLowerCase().includes(lowered) ||
      url?.toLowerCase().includes(lowered)
  );
}
