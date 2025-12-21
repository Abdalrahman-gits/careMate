import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addAppointment as apiAddAppointment } from "../../services/bookApi";
import toast from "react-hot-toast";

function useAddAppointment(userId) {
  const queryClient = useQueryClient();

  const { mutate: addAppointment, isPending } = useMutation({
    mutationFn: apiAddAppointment,
    onMutate: () => {
      const id = toast.loading("Booking...");
      return { toastId: id };
    },
    onSuccess: (_, __, context) => {
      queryClient.invalidateQueries(["appointments", userId]);
      toast.success("Appointment booked successfully", { id: context.toastId });
    },
    onError: (err, _, context) => {
      toast.error(err.message, { id: context.toastId });
    },
  });

  return { addAppointment, isPending };
}

export { useAddAppointment };
