import { getItemById } from "../../Services/apiPizza";
import ItemDetails from "./ItemDetails";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Components/Spinner";
import Error from "../../Components/Error";
import { useParams } from "react-router-dom";

function ItemDetailsPage() {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["product details", id],
    queryFn: () => getItemById(id),
  });
  if (isLoading) return <Spinner />;

  if (error) return <Error />;

  return (
    <div className="text-3xl">
      {data?.map((item) => (
        <ItemDetails key={item.id} data={item} />
      ))}
    </div>
  );
}

export default ItemDetailsPage;
