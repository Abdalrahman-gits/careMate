import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signUpApi } from "../../services/authApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: signUpApi,
    onMutate: () => {
      const id = toast.loading("Signinng up");
      return { toastId: id };
    },
    onSuccess: (data, _, context) => {
      toast.success("Account created successfully", { id: context.toastId });
      queryClient.setQueryData(["user"], data);
      navigate("/doctors");
    },
    onError: (err, _, context) => {
      toast.error(err.message, { id: context.toastId });
    },
  });

  return { signup, isPending };
}

export { useSignup };
