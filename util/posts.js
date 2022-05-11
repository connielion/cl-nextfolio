/** Returns array of objects; each object: { params: {id}} */
const getAllPostIds = () => {
  const fileNames = fs.readdirSync(PostDirectory);

  return fileNames?.map((name) => {
    params: {
      id: fileNames.replace(/\.md$/, ""); // replace .md file extension for slug
    }
  });
};

// return post data based on `id`
const getPostDataById = (id) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContent);

  return {
    id,
    ...matterResult.data,
  };
};

export { getAllPostIds };
