import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addAppointment as apiAddAppointment } from "../../services/bookApi";
import toast from "react-hot-toast";

function useAddAppointment(userId) {
  const queryClient = useQueryClient();

  const { mutate: addAppointment, isPending } = useMutation({
    mutationFn: apiAddAppointment,
    onSuccess: () => {
      queryClient.invalidateQueries(["appointments", userId]);
      toast.success("Appointment booked successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { addAppointment, isPending };
}

export { useAddAppointment };
