export type NewItemTileModel = {
  urlToImage: string;
  title: string;
  author: string;
  content: string;
  publishedAt: string;
  description: string;
  url: string;
};

export type NewsDataResponse = {
  data: NewItemTileModel[];
};
