import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAppointment as apiDeleteAppointment } from "../../services/bookApi";
import toast from "react-hot-toast";
import { useAuth } from "../../contexts/AuthContext";

function useDeleteAppointment() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { mutate: deleteAppointment, isPending } = useMutation({
    mutationFn: apiDeleteAppointment,

    onSuccess: () => {
      toast.success("Appointment deleted");
      queryClient.invalidateQueries(["appointments", user?.user?.id]);
    },
    onError: () => {
      toast.error("Can not delete Appointment");
    },
  });

  return { deleteAppointment, isPending };
}

export { useDeleteAppointment };
