import { useQuery } from "@tanstack/react-query";
import ItemSection from "./ItemSection";
import Spinner from "../../Components/Spinner";
import { getMenus } from "../../Services/apiPizza";

function MenuPage() {
  const { data: menus, isLoading } = useQuery({
    queryKey: ["menu"],
    queryFn: getMenus,
  });

  if (isLoading) return <Spinner />;
  return (
    <div className="p-10  2xl:h-[815px] sm:px-16 custom-grid-1 gap-6 bg-slate-100">
      {menus.map((menu) => (
        <ItemSection
          key={menu.id}
          sectionName={menu.name}
          description={menu.description}
          backgroundImg={menu.bgImage}
          textColor={menu.textColor}
          type={menu.type}
        />
      ))}
    </div>
  );
}

export default MenuPage;
