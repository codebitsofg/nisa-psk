"use client";

import React from "react";
import { X } from "lucide-react";
import {useTranslations} from "next-intl";

interface KVKKModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const KVKKModal = ({ isOpen, onClose }: KVKKModalProps) => {
  const t = useTranslations("kvkk_modal");
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-primary-text font-serif-rewrite">
            {t("title")}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        <div className="p-8 overflow-y-auto text-gray-700 space-y-4">
          <p className="font-semibold">{t("p1_bold")}</p>
          <p>
            {t.rich("p1", {
              b: (chunks) => <strong>{chunks}</strong>
            })}
          </p>
          <h3 className="font-bold text-lg pt-2">{t("subtitle1")}</h3>
          <p>
            {t("p2")}
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>{t("li1")}</li>
            <li>{t("li2")}</li>
            <li>{t("li3")}</li>
            <li>{t("li4")}</li>
          </ul>
          <h3 className="font-bold text-lg pt-2">{t("subtitle2")}</h3>
          <p>
            {t("p3")}
          </p>
          <h3 className="font-bold text-lg pt-2">{t("subtitle3")}</h3>
          <p>
            {t("p4")}
          </p>
          <h3 className="font-bold text-lg pt-2">{t("subtitle4")}</h3>
          <p>
            {t("p5")}
          </p>
        </div>
        <div className="p-6 border-t bg-gray-50 text-right">
          <button
            onClick={onClose}
            className="bg-accent text-white px-8 py-2 rounded-lg hover:bg-primary transition-colors font-semibold"
          >
            {t("button")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default KVKKModal;
