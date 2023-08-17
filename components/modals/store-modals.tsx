"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();
  return (
    <Modal
      title="ساخت فروشگاه"
      description="فزودن فروشگاه جدیدی  برای مدیریت محصوات و دسته بندی"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      store form
    </Modal>
  );
};
