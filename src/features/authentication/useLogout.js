import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as apiLogout } from "../../services/authApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logout, isPending } = useMutation({
    mutationFn: apiLogout,
    onMutate: () => {
      const id = toast.loading("logging out");
      return { toastId: id };
    },
    onSuccess: (_, __, context) => {
      queryClient.setQueryData(["user"], null);
      toast.success("logged out successfully", { id: context.toastId });
      navigate("/auth/login", { replace: true });
    },

    onError: (err, _, context) => {
      toast.error(err.message, { id: context.toastId });
    },
  });

  return { logout, isPending };
}

export { useLogout };
