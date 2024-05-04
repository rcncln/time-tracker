import { useState } from "react";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { postProject } from "@/lib/postProject";

export const useHook = (userId: any) => {
  const [projectName, setProjectName] = useState("");
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(() => e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const result = await postProject({ projectName, userId });

    setLoading(false);
    setProjectName("");

    if (result) {
      toast({
        title: "Created Project",
        description: `${projectName} was created successfully!`,
      });
    } else {
      toast({
        title: "Failed to create the project",
        description: `${projectName} was not created`,
        variant: "destructive",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  return {
    setProjectName,
    handleChange,
    handleSubmit,
    loading,
    handleInputBlur,
    handleInputFocus,
    isFocused,
    projectName,
  };
};
