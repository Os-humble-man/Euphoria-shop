import { Heart, ShoppingCart, UserRound } from "lucide-react";

export default function NavbarIcon() {
  const iconStyle = "cursor-pointer bg-gray-200 p-2 rounded-md text-gray-400";
  return (
    <div className="flex items-center space-x-4">
      <div className={iconStyle}>
        <Heart size={20} />
      </div>

      <div className={iconStyle}>
        <UserRound size={20} />
      </div>
      <div className={iconStyle}>
        <ShoppingCart size={20} />
      </div>
    </div>
  );
}
