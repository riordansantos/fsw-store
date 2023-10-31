import { ProductWithTotalPrice } from "@/helpers/products";
import { Product } from "@prisma/client";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { ArrowDown } from "lucide-react";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex flex-col gap-4 max-w-[156px]">
      <div className=" relative bg-accent rounded-lg h-[170px] w-[156px]  flex items-center justify-center">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-auto max-w-[80%] max-h-[70%]"
          style={{ objectFit: "contain" }}
        />
        {product.discountPercentage > 0 && (
          <Badge className="absolute left-2 top-2 px-2 py-[2px]">
            <ArrowDown size={14} /> {product.discountPercentage}%
          </Badge>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="w-full text-sm overflow-hidden whitespace-nowrap text-ellipsis">
          {product.name}
        </p>
        <div className="flex items-center gap-2">
          {product.discountPercentage > 0 ? (
            <>
              <p className="font-semibold">
                R$ {product.totalPrice.toFixed(2)}
              </p>
              <p className="opacity-75 line-through text-xs">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            </>
          ) : (
            <p className="font-semibold text-sm">
              R$ {product.basePrice.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
