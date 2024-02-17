export interface CardItem {
  title?: string | null;
  created_at?: string | null;
  description?: string | null;
  url?: string | null;
  image_source?: string | null;
  updated_at?: string | null;
  folder_id?: number | null;
  id?: number | null;
}

export interface CardItemTransformed {
  title?: string | null;
  createdAt?: string | null;
  description?: string | null;
  url?: string | null;
  imageSource?: string | null;
  updatedAt?: string | null;
  folderId?: number | null;
  id?: number | null;
}
