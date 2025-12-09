import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/authApi";

function useUser() {
  const { data: user, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return {
    user,
    isPending,
    isAuthenticated: user?.user?.role === "authenticated",
  };
}

export { useUser };
