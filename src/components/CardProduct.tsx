import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Product } from "@/types/Product";
interface Props {
  product: Product;
}
export default function CardProduct({ product }: Props) {
  return (
    <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex flex-col cursor-pointer shadow-md">
      <div className="relative aspect-video ">
        <img
          src={product.image}
          alt={product.title}
          height={300}
          width={500}
          className="object-cover overflow-hidden"
        />
      </div>
      <CardContent className="p-4 flex-1 flex flex-col">
        <CardTitle className="text-lg md:text-xl font-semibold tracking-wide">
          {product.title.slice(0, 20)}
        </CardTitle>
      </CardContent>
    </Card>
  );
}
