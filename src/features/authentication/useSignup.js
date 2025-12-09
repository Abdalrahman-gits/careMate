import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signUpApi } from "../../services/authApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (data) => {
      console.log(data);
      toast.success("Account created successfully");
      queryClient.setQueryData(["user"], data.user);
      navigate("/doctors");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { signup, isPending };
}

export { useSignup };
