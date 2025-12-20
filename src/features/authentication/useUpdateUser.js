import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserData } from "../../services/authApi";
import toast from "react-hot-toast";

function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending } = useMutation({
    mutationFn: updateUserData,

    onMutate: () => {
      const id = toast.loading("Updating Profile");
      return { toastId: id };
    },

    onSuccess: (data, _, context) => {
      queryClient.setQueryData(["user"], data);
      toast.success("User account successfully updated", {
        id: context.toastId,
      });
    },

    onError: (err, _, context) => {
      toast.error(err.message, { id: context.toastId });
    },
  });

  return { updateUser, isPending };
}

export { useUpdateUser };
