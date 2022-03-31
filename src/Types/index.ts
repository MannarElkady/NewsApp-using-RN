export const DomainConstants = Object.freeze({
  baseURL: 'https://newsapi.org/',
  postsURL: 'v2/everything',
});

export type NewItemTileModel = {
  urlToImage: string;
  title: string;
};
