import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../Services/apiAuth";

export default function useUser() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });
  return {
    isAuthenticated:
      data &&
      (data?.user
        ? data?.user.role === "authenticated"
        : data.role === "authenticated"),
    isLoading,
    error,
  };
}
