import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAppointment as apiDeleteAppointment } from "../../services/bookApi";
import toast from "react-hot-toast";
import { useAuth } from "../../contexts/AuthContext";

function useDeleteAppointment() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { mutate: deleteAppointment, isPending } = useMutation({
    mutationFn: apiDeleteAppointment,

    onMutate: () => {
      const id = toast.loading("Canceling Appointment");
      return { toastId: id };
    },

    onSuccess: (_, __, context) => {
      toast.success("Appointment deleted", { id: context.toastId });
      queryClient.invalidateQueries(["appointments", user?.user?.id]);
    },
    onError: (_, __, context) => {
      toast.error("Can not delete Appointment", { id: context.toastId });
    },
  });

  return { deleteAppointment, isPending };
}

export { useDeleteAppointment };
