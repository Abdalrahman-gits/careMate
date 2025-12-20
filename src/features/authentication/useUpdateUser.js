import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserData } from "../../services/authApi";
import toast from "react-hot-toast";

function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending } = useMutation({
    mutationFn: updateUserData,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data);
      toast.success("User account successfully updated");
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateUser, isPending };
}

export { useUpdateUser };
