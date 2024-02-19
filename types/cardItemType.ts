export interface CardItem {
  title?: string;
  created_at?: string;
  description?: string;
  url?: string;
  image_source?: string;
  updated_at?: string;
  folder_id?: number;
  id?: number;
}

export interface CardItemTransformed {
  title?: string;
  createdAt?: string;
  description?: string;
  url?: string;
  imageSource?: string;
  updatedAt?: string;
  folderId?: number;
  id?: number;
}
