import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as apiLogout } from "../../services/authApi";
import toast from "react-hot-toast";

function useLogout() {
  const queryClient = useQueryClient();
  const { mutate: logout, isPending } = useMutation({
    mutationFn: apiLogout,
    onSuccess: () => {
      queryClient.setQueryData(["user"], null);
      toast.success("logged out successfully");
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { logout, isPending };
}

export { useLogout };
