import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editReview as apiEditReview } from "../../services/reviewsApi";
import toast from "react-hot-toast";

function useEditReview() {
  const queryClient = useQueryClient();

  const { mutate: editReview, isPending } = useMutation({
    mutationFn: ({ id, data }) => apiEditReview(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries(["reviews"]);
      toast.success("Review Edited");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { editReview, isPending };
}

export { useEditReview };
