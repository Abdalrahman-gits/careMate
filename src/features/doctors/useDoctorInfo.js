import { useQuery } from "@tanstack/react-query";
import { getDoctorInfo } from "../../services/doctorsApi";

function useDoctorInfo(doctorId) {
  const { data: doctor, isPending } = useQuery({
    queryKey: ["doctor", doctorId],
    queryFn: () => getDoctorInfo(doctorId),
  });

  return { doctor, isPending };
}

export { useDoctorInfo };
