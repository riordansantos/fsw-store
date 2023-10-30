import { prismaClient } from "@/lib/prisma";
import CategoryItem from "./category-item";

const Categories = async () => {
  const categories = await prismaClient.category.findMany({});
  return (
    <div>
      <div className="grid grid-cols-2 gap-y-2 gap-x-2">
        {categories.map((category) => (
          <CategoryItem category={category} key={category.name} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
