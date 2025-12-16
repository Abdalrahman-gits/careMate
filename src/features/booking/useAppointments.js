import { useQuery } from "@tanstack/react-query";
import { getUserAppointments } from "../../services/bookApi";

function useAppointments(userId) {
  const { data: appointments, isPending } = useQuery({
    queryKey: ["appointments", userId],
    queryFn: () => getUserAppointments(userId),
    staleTime: 60 * 1000,
  });

  return { appointments, isPending };
}

export { useAppointments };
