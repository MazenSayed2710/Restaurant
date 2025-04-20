import { getSection } from "../../Services/apiPizza";
import ItemSectionContent from "./ItemSectionContent";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Components/Spinner";
import Error from "../../Components/Error";
import { useParams } from "react-router-dom";

function ItemSection() {
  const { type } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["products", type],
    queryFn: () => getSection(type),
  });
  if (error) return <Error />;
  if (isLoading) return <Spinner />;

  return (
    <div className="custom-grid-2 ">
      {data.map((item) => (
        <ItemSectionContent key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemSection;
