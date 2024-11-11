import useProduct from "@/hooks/useProducts";
import CardProduct from "./CardProduct";

export default function NewArival() {
  const { data } = useProduct();

  return (
    <div className="max-w-6xl mx-auto pb-20">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 py-10">
        {/* left arrow */}
        {/* <div className="flex items-center justify-start w-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </div> */}
        {data.map((item) => (
          <CardProduct key={item.id} product={item} />
        ))}
      </div>

      {/* <div className="flex items-center justify-end w-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div> */}
    </div>
  );
}
