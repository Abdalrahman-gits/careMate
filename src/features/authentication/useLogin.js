import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/authApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: loginApi,
    onMutate: () => {
      const id = toast.loading("Logging in");
      return { toastId: id };
    },
    onSuccess: (data, _, context) => {
      toast.success("logged in successfully", { id: context.toastId });
      queryClient.setQueryData(["user"], data);
      // navigate("/doctors", { replace: true });
    },
    onError: (err, _, context) => {
      toast.error(
        err.message === "Failed to fetch"
          ? "Check your internet"
          : "Invalid email or password",
        { id: context.toastId }
      );
    },
  });

  return { login, isPending };
}

export { useLogin };
