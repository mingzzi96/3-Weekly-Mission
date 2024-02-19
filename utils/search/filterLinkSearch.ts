import { CardItemTransformed } from "@/types/cardItemType";

export function filterLinkSearch(
  items: CardItemTransformed[],
  keyword: string
) {
  const lowered = keyword.toLowerCase();
  return items.filter(
    ({ description, title, url }) =>
      description?.toLowerCase().includes(lowered) ||
      title?.toLowerCase().includes(lowered) ||
      url?.toLowerCase().includes(lowered)
  );
}
