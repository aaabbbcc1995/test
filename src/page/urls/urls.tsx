export const getApiUrl = (throttling: string, keyword: string) => {
  return `https://frontend-test-api.digitalcreative.cn/?no-throttling=${throttling}&search=${keyword}`;
};
