import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../Services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/");
    },
    onError: (error) => {
      console.error(error.message);
      toast.error("Provided email or password are incorrect");
    },
  });
  return { mutate, isPending };
}

export default useLogin;
