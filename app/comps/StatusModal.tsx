"use client";

import React from "react";
import { X, CheckCircle2, AlertCircle, Info } from "lucide-react";
import {useTranslations} from "next-intl";

export type StatusType = "success" | "error" | "info" | "warning";

interface StatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: StatusType;
  title?: string;
  message: string;
}

const StatusModal = ({ isOpen, onClose, type, title, message }: StatusModalProps) => {
  const t = useTranslations("status_modal");

  if (!isOpen) return null;

  const config = {
    success: {
      icon: <CheckCircle2 className="w-12 h-12 text-green-500" />,
      defaultTitle: t("success_title"),
      buttonClass: "bg-green-600 hover:bg-green-700",
    },
    error: {
      icon: <AlertCircle className="w-12 h-12 text-red-500" />,
      defaultTitle: t("error_title"),
      buttonClass: "bg-red-600 hover:bg-red-700",
    },
    warning: {
      icon: <AlertCircle className="w-12 h-12 text-amber-500" />,
      defaultTitle: t("warning_title"),
      buttonClass: "bg-amber-600 hover:bg-amber-700",
    },
    info: {
      icon: <Info className="w-12 h-12 text-accent" />,
      defaultTitle: t("info_title"),
      buttonClass: "bg-accent hover:bg-primary",
    },
  };

  const { icon, defaultTitle, buttonClass } = config[type];

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-300">
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-semibold text-gray-500 text-sm">{t("notification")}</span>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        
        <div className="p-8 flex flex-col items-center text-center space-y-4">
          <div className="p-3 bg-gray-50 rounded-full">
            {icon}
          </div>
          <h2 className="text-2xl font-bold text-primary-text font-serif-rewrite">
            {title || defaultTitle}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {message}
          </p>
        </div>

        <div className="p-6 pt-0 bg-white text-center">
          <button
            onClick={onClose}
            className={`w-full text-white px-8 py-3 rounded-xl transition-all font-bold text-lg shadow-lg active:scale-[0.98] ${buttonClass}`}
          >
            {t("button")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusModal;
