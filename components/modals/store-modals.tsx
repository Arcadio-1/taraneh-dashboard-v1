"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchame = z.object({
  name: z.string().min(3, { message: "نام مورد نظر باید حداقل 3 حرف باشد" }),
});

export const StoreModal = () => {
  const storeModal = useStoreModal();

  const form = useForm<z.infer<typeof formSchame>>({
    resolver: zodResolver(formSchame),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchame>) => {
    console.log(values);
  };

  return (
    <Modal
      title="ساخت فروشگاه"
      description="افزودن فروشگاه جدیدی  برای مدیریت محصوات و دسته بندی"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>نام فروشگاه</FormLabel>
                    <FormControl>
                      <Input placeholder="فروشگاه ترانه" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-6 space-x-1 gap-2 flex items-center justify-end">
                <Button onClick={storeModal.onClose} variant={"outline"}>
                  انصراف
                </Button>
                <Button type="submit">ادامه</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
