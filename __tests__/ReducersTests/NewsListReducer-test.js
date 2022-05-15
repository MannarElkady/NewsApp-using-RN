import NewsListReducer, {
  setNews,
} from '../../src/Redux/Slicers/NewsListReducer';

describe('Language Reducer', () => {
  test('should return empty list when state is undefined', () => {
    expect(NewsListReducer(undefined, {})).toEqual({data: []});
  });

  test('should override old list and return new list when state setNews', () => {
    const oldState = [{title: 'title', author: 'author'}];
    const newState = [{title: 'title2', author: 'author2'}];
    expect(NewsListReducer({data: oldState}, setNews(newState))).toEqual({
      data: newState,
    });
  });
});
