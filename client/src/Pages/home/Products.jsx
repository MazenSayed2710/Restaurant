import { useQuery } from "@tanstack/react-query";
import { getItems } from "../../Services/apiPizza";
import Product from "./Product";
import Spinner from "../../Components/Spinner";
import { filterProducts } from "../../helpers";

function Products() {
  const { data, isLoading } = useQuery({
    queryKey: ["slider menu"],
    queryFn: getItems,
  });
  console.log(data);
  const fiteredData = filterProducts(data);
  if (isLoading) return <Spinner />;
  return (
    <div className="overflow-x-scroll">
      <div className="w-max flex">
        {fiteredData.map((item) => (
          <Product data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Products;
