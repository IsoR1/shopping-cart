import categories from "../data/categories";

const getTotalItemCount = (category = categories) => {
  let totalCount = 0;

  category.forEach((cat) => {
    totalCount += cat.length;
  });

  return totalCount;
};

export default getTotalItemCount;
