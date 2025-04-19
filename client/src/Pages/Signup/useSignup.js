import { useMutation } from "@tanstack/react-query";
import { signup } from "../../Services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      toast.success("sucessfully sign up");
      navigate("/login");
    },
    onError: () => {
      toast.error("There is an error in the sign-up.");
    },
  });

  return { mutate, isPending };
}
