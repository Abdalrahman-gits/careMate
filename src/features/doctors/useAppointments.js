import { useQuery } from "@tanstack/react-query";
import { getUserAppointments } from "../../services/doctorsApi";

function useAppointments(userId) {
  const { data: appointments, isPending } = useQuery({
    queryKey: ["appointments", userId],
    queryFn: () => getUserAppointments(userId),
  });

  return { appointments, isPending };
}

export { useAppointments };
