const formatDate = (date) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // undefined at first, pass siteMetadata.locale later
  const today = new Date(date).toLocaleDateString(undefined, options);
  return today;
};
export { formatDate };
