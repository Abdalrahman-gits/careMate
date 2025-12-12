import { useMutation } from "@tanstack/react-query";
import { addAppointment as apiAddAppointment } from "../../services/doctorsApi";
import toast from "react-hot-toast";

function useAddAppointment() {
  const { mutate: addAppointment, isPending } = useMutation({
    mutationFn: apiAddAppointment,
    onSuccess: () => {
      toast.success("Appointment booked successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { addAppointment, isPending };
}

export { useAddAppointment };
