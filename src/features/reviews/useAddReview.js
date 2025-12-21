import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addReview as apiAddReview } from "../../services/reviewsApi";
import toast from "react-hot-toast";

function useAddReview() {
  const queryClient = useQueryClient();

  const { mutate: addReview, isPending } = useMutation({
    mutationFn: apiAddReview,

    onMutate: () => {
      const id = toast.loading("Submitting Review");
      return { toastId: id };
    },

    onSuccess: (_, __, context) => {
      queryClient.invalidateQueries(["reviews"]);
      toast.success("Review Added", { id: context.toastId });
    },
    onError: (err, _, context) => {
      toast.error(err.message, { id: context.toastId });
    },
  });

  return { addReview, isPending };
}

export { useAddReview };
