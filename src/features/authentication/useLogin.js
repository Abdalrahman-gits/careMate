import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/authApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      toast.success("logged in successfully");
      queryClient.setQueryData(["user"], data);
      navigate("/doctors");
    },
    onError: () => {
      toast.error("incorrect email or password");
    },
  });

  return { login, isPending };
}

export { useLogin };
