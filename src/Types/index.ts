export const appPrefixes = ['mynewsapp://', 'https://mynewsapp.com'];
export const newsDetailsTitle = 'details';

export const DomainConstants = Object.freeze({
  baseURL: 'https://newsapi.org/',
  postsURL: 'v2/everything',
  domains: 'wsj.com',
  apiKey: 'fef3c5a0d8ac4a64b9531c314d393b14',
});

export const NavigationScreens = Object.freeze({
  detailsPage: 'DetailsPage',
  TabNavigator: 'TabNavigator',
});

export type NewItemTileModel = {
  urlToImage: string;
  title: string;
  author: string;
  content: string;
  publishedAt: string;
  description: string;
};

export type NewsDataResponse = {
  data: NewItemTileModel[];
};
