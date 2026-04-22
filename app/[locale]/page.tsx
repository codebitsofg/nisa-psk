"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import BlogPosts from "../comps/BlogPosts";
import Navigation from "../comps/Navigation";
import KVKKModal from "../comps/KVKKModal";
import StatusModal, { StatusType } from "../comps/StatusModal";
import { submitAppointmentForm } from "../actions/submit-form";
import { DatePicker } from "@/components/ui/date-picker";
import { format } from "date-fns";
import { tr, de } from "date-fns/locale";
import { useTranslations, useLocale } from "next-intl";

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();
  const dateLocale = locale === "de" ? de : tr;

  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    dateTimeRange: "",
    isKvkkApproved: false
  });
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [isKvkkModalOpen, setIsKvkkModalOpen] = useState(false);
  const [statusModal, setStatusModal] = useState<{
    isOpen: boolean;
    type: StatusType;
    message: string;
    title?: string;
  }>({
    isOpen: false,
    type: "info",
    message: "",
  });

  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      setFormData({ ...formData, dateTimeRange: format(date, "PPP", { locale: dateLocale }) });
    } else {
      setFormData({ ...formData, dateTimeRange: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.isKvkkApproved) {
      setStatusModal({
        isOpen: true,
        type: "warning",
        title: t("status_modal.title_required"),
        message: t("status_modal.warning_msg")
      });
      return;
    }

    startTransition(async () => {
      const result = await submitAppointmentForm(formData);
      if (result.success) {
        setStatusModal({
          isOpen: true,
          type: "success",
          title: t("status_modal.title_received"),
          message: t("status_modal.success_msg")
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          dateTimeRange: "",
          isKvkkApproved: false
        });
        setSelectedDate(undefined);
      } else {
        setStatusModal({
          isOpen: true,
          type: "error",
          title: t("status_modal.title_error"),
          message: result.error || t("status_modal.error_msg")
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative min-h-screen pt-20">
        <div className="absolute inset-0 bg-[url('/bg-test.jpeg')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center min-h-[calc(100vh-80px)]">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-12 lg:py-0">
            {/* Hero Text content */}
            <div className="text-white space-y-8 animate-in fade-in slide-in-from-left duration-1000">
              <div className="flex flex-col items-start gap-6">

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif-rewrite leading-tight">
                  {t("hero.title_1")} <br />
                  <span className="text-white/80">{t("hero.title_2")}</span>
                </h1>
              </div>
              <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
                {t("hero.description")}
              </p>

            </div>

            {/* Appointment Form */}
            <div className="bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-2xl animate-in fade-in slide-in-from-right duration-1000 border border-white/20">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-primary-text font-serif-rewrite mb-2">{t("hero.form_title")}</h2>
                <p className="text-gray-600 text-sm">{t("hero.form_subtitle")}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">{t("form.name_label")}</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                      placeholder={t("form.name_placeholder")}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">{t("form.email_label")}</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                      placeholder={t("form.email_placeholder")}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">{t("form.phone_label")}</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                      placeholder={t("form.phone_placeholder")}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">{t("form.service_label")}</label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white appearance-none"
                    >
                      <option value="">{t("form.service_placeholder")}</option>
                      <option value="Bireysel Terapi">{t("form.services.individual")}</option>
                      <option value="Kaygı Bozuklukları">{t("form.services.anxiety")}</option>
                      <option value="Depresyon">{t("form.services.depression")}</option>
                      <option value="İlişki Problemleri">{t("form.services.relationship")}</option>
                      <option value="Stres Yönetimi">{t("form.services.stress")}</option>
                      <option value="Kariyer Danışmanlığı">{t("form.services.career")}</option>
                      <option value="Ebeveyn Danışmanlığı">{t("form.services.parenting")}</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">{t("form.date_label")}</label>
                  <DatePicker
                    date={selectedDate}
                    setDate={handleDateChange}
                    placeholder={t("form.date_placeholder")}
                  />
                </div>

                <div className="flex items-start gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="kvkk"
                    required
                    checked={formData.isKvkkApproved}
                    onChange={(e) => setFormData({ ...formData, isKvkkApproved: e.target.checked })}
                    className="mt-1 w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent cursor-pointer"
                  />
                  <label htmlFor="kvkk" className="text-xs text-gray-500 leading-tight cursor-pointer">
                    {t("form.kvkk_prefix")}
                    <button
                      type="button"
                      onClick={() => setIsKvkkModalOpen(true)}
                      className="text-accent underline font-semibold hover:text-primary transition-colors inline mr-1"
                    >
                      {t("form.kvkk_link")}
                    </button>
                    {t("form.kvkk_suffix")}
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-accent text-white py-4 rounded-xl font-bold text-lg hover:bg-primary transition-all shadow-lg hover:shadow-accent/40 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {isPending ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t("form.submitting")}
                    </span>
                  ) : (
                    t("form.submit")
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <KVKKModal isOpen={isKvkkModalOpen} onClose={() => setIsKvkkModalOpen(false)} />
      <StatusModal
        isOpen={statusModal.isOpen}
        onClose={() => setStatusModal({ ...statusModal, isOpen: false })}
        type={statusModal.type}
        title={statusModal.title}
        message={statusModal.message}
      />

      {/* About Section */}
      <section id="hakkimda" className="py-20 pt-24   pl-5 gap-5 flex flex-row">
        <div className="min-w-[300px]   flex-1 p-16">
          <img src="/therapy.jpg" alt="About" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white  p-8 shadow-lg  py-16 text-left">
            <h2 className="text-xl font-bold font-serif-rewrite pb-10 text-primary-text mb-6">{t("about.section_title")}</h2>
            <p className=" text-gray-700 mb-5 text-2xl font-bold font-serif-rewrite mb-2">{t("about.title")} </p>
            <p className="text-gray-600  mb-4">{t("about.p1")}<br /></p>
            <p className="text-gray-600  mb-4">{t("about.p2")}<br /></p>
            <p className="text-gray-600  mb-4">{t("about.p3")}<br /></p>
            <p className="text-gray-600  mb-4">{t("about.p4")}<br /></p>
            <p className="text-gray-600  mb-4">{t("about.p5")}<br /></p>
            <p className="text-gray-600  mb-4">{t("about.p6")}<br /></p>
            {t("about.p7")}

            <div className="flex flex-col sm:flex-row mt-10 gap-4">
              <a
                href="#randevu"
                className={` bg-accent text-white px-12 py-4 rounded-lg hover:bg-primary transition-colors font-semibold text-lg text-center `}
              >
                {t("about.button")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="hizmetler"
        className="pb-20 px-4 sm:px-6 -mt-10 lg:px-8 "
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-16">
            <div className="max-w-3xl">

              <h2 className="text-4xl sm:text-5xl font-serif-rewrite font-bold text-primary-text leading-tight ">
                {t("services.title")}
              </h2>
              <div className="mt-6 h-[3px] w-24 bg-primary" />
            </div>



          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#e6e9ef] rounded-xl overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.04)]">
            {[
              { id: "personal_growth" },
              { id: "stress_management" },
              { id: "anxiety_disorders" },
              { id: "relationship_issues" },
              { id: "depression" },
              { id: "self_esteem" },
              { id: "parenting" },
              { id: "trauma" },
            ].map(({ id }) => {
              const card = (
                <div className="flex h-full flex-col justify-between border-r border-b border-[#e6e9ef] bg-white px-6 py-10 transition duration-200 group-hover:bg-secondary/5 ">
                  <h3 className="text-2xl font-bold text-primary-text leading-tight break-words hyphens-auto">
                    {t(`services.items.${id}` as any)}
                  </h3>
                  <span className="mt-10 text-md font-semibold text-primary group-hover:text-accent">
                    {t("services.details")}
                  </span>
                </div>
              );



              return (
                <div key={id} className="group h-full">
                  {card}
                </div>
              );
            })}
          </div>

          <p className="text-gray-600  mt-5   max-w-4xl  " >
            {t("services.description")}
          </p>
        </div>
      </section>


      {/* <section id="randevu" className="py-8 mt-12 px-4  mb-16 sm:px-6 lg:px-8 bg-accent">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">{t("contact.title")}</h2>
              <p className="text-md  text-white ">
                {t("contact.description")}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="sr-only">
                    {t("form.name_label")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-[#d9dce3] bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c79b55] focus:border-transparent"
                    placeholder={t("form.name_placeholder")}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    {t("form.phone_label")}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-[#d9dce3] bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c79b55] focus:border-transparent"
                    placeholder={t("form.phone_placeholder")}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 w-full bg-white text-primary-text  px-6 py-4 rounded-md font-semibold text-lg transition  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-primary"
              >
                {t("form.submit_contact")}
              </button>
            </form>
          </div>
        </div>
      </section> */}


      <BlogPosts />




    </div>
  );
}
