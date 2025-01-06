import { generalInfoSchema, GeneralInfoValues } from "@/lib/validation";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";

export default function GeneralInfoForm() {
  const form = useForm<GeneralInfoValues>({
    resolver: zodResolver(generalInfoSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div className="space-y-1.5 text-center">
        <h2 className="text-2xl font-semibold">General info </h2>
        <p className="text-sm text-muted-foreground">
          this will not appear on yout resume{" "}
        </p>
      </div>
      <Form {...form}>
        <form className="space-5"></form>
      </Form>
    </div>
  );
}
