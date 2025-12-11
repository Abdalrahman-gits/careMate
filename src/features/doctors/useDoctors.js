import { useQuery } from "@tanstack/react-query";
import { getDoctors } from "../../services/doctorsApi";

function useDoctors() {
  const { data: doctors, isPending } = useQuery({
    queryKey: ["doctors"],
    queryFn: getDoctors,
  });

  return { doctors, isPending };
}

export { useDoctors };
