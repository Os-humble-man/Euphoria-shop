import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function CardProduct() {
  return (
    <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex flex-col cursor-pointer shadow-md">
      <div className="relative aspect-video overflow-hidden rounded-t-lg">
        <img src="" alt="" className="w-full h-full object-cover" />
      </div>
      <CardContent className="p-4 flex-1 flex flex-col">
        <CardTitle className="text-lg md:text-xl font-semibold tracking-wide">
          Product Name
        </CardTitle>
      </CardContent>
    </Card>
  );
}
