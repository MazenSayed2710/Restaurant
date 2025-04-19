import { useMutation } from "@tanstack/react-query";
import { logout } from "../../Services/apiAuth";
import { useNavigate } from "react-router-dom";
export function useLogout() {
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      navigate("/login");
    },
  });
  return { mutate, isLoading };
}
