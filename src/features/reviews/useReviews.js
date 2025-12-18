import { useQuery } from "@tanstack/react-query";
import { getReviews } from "../../services/reviewsApi";
import { useAuth } from "../../contexts/AuthContext";

function useReviews() {
  const { user } = useAuth();

  const { data: reviews, isPending } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => getReviews(user?.user?.id),
  });

  return { reviews, isPending };
}

export { useReviews };
