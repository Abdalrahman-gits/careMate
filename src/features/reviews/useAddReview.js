import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addReview as apiAddReview } from "../../services/reviewsApi";
import toast from "react-hot-toast";

function useAddReview() {
  const queryClient = useQueryClient();

  const { mutate: addReview, isPending } = useMutation({
    mutationFn: apiAddReview,

    onSuccess: () => {
      queryClient.invalidateQueries(["reviews"]);
      toast.success("Review Added");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { addReview, isPending };
}

export { useAddReview };
