import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editReview as apiEditReview } from "../../services/reviewsApi";
import toast from "react-hot-toast";

function useEditReview() {
  const queryClient = useQueryClient();

  const { mutate: editReview, isPending } = useMutation({
    mutationFn: ({ id, data }) => apiEditReview(id, data),

    onMutate: () => {
      const id = toast.loading("Editting Review");
      return { toastId: id };
    },

    onSuccess: (_, __, context) => {
      queryClient.invalidateQueries(["reviews"]);
      toast.success("Review Edited", { id: context.toastId });
    },
    onError: (err, _, context) => {
      toast.error(err.message, { id: context.toastId });
    },
  });

  return { editReview, isPending };
}

export { useEditReview };
