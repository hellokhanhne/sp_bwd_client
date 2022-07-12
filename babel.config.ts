const macros = (api: any) => {
  api.cache(true);
  return {
    plugins: ['macros'],
  };
};
export default macros;
