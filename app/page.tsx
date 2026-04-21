"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import BlogPosts from "./comps/BlogPosts";
import Navigation from "./comps/Navigation";
import KVKKModal from "./comps/KVKKModal";
import StatusModal, { StatusType } from "./comps/StatusModal";
import { submitAppointmentForm } from "./actions/submit-form";
import { DatePicker } from "@/components/ui/date-picker";
import { format } from "date-fns";
import { tr } from "date-fns/locale";

export default function Home() {
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
      setFormData({ ...formData, dateTimeRange: format(date, "PPP", { locale: tr }) });
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
        title: "Onay Gerekli",
        message: "Lütfen KVKK metnini onaylayın."
      });
      return;
    }

    startTransition(async () => {
      const result = await submitAppointmentForm(formData);
      if (result.success) {
        setStatusModal({
          isOpen: true,
          type: "success",
          title: "Talebiniz Alındı",
          message: "Teşekkürler! Talebiniz başarıyla alındı, en kısa sürede sizinle iletişime geçeceğiz."
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
          title: "Bir Sorun Oluştu",
          message: result.error || "Bir hata oluştu, lütfen tekrar deneyin."
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
                <img src="/logo.png" alt="NA Psikolojik Danışmanlık ve Eğitim" className='bg-white rounded-full w-24 h-auto shadow-xl' />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif-rewrite leading-tight">
                  Kendi İçsel Yolculuğuna <br />
                  <span className="text-white/80">Hoş Geldin</span>
                </h1>
              </div>
              <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
                Psikolojik danışmanlık hizmetleri, bireyin kendini daha iyi tanımasına; duygusal ve zihinsel farkındalığını geliştirmesine ve yaşam kalitesini artırmasına yönelik profesyonel bir destek sürecidir.
                Kendini daha yakından tanımak, kişisel gelişimini desteklemek ve yaşam kalitesini artırmak isteyen herkes psikolojik danışmanlık hizmetlerinden yararlanabilir.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-accent bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium text-white/80">
                  <span className="text-white font-bold block">500+ Danışan</span>
                  Tarafından Tercih Edildi
                </p>
              </div>
            </div>

            {/* Appointment Form */}
            <div className="bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-2xl animate-in fade-in slide-in-from-right duration-1000 border border-white/20">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-primary-text font-serif-rewrite mb-2">Kolayca Randevu Al</h2>
                <p className="text-gray-600 text-sm">ÜCRETSİZ 15 dk ön görüşme için formu doldurun.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Adınız Soyadınız</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                      placeholder="Ad Soyad"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">E-posta Adresi</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                      placeholder="ornek@mail.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Telefon Numaranız</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                      placeholder=""
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Hizmet Branşı</label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white appearance-none"
                    >
                      <option value="">Seçiniz</option>
                      <option value="Bireysel Terapi">Bireysel Terapi</option>
                      <option value="Kaygı Bozuklukları">Kaygı Bozuklukları</option>
                      <option value="Depresyon">Depresyon</option>
                      <option value="İlişki Problemleri">İlişki Problemleri</option>
                      <option value="Stres Yönetimi">Stres Yönetimi</option>
                      <option value="Kariyer Danışmanlığı">Kariyer Danışmanlığı</option>
                      <option value="Ebeveyn Danışmanlığı">Ebeveyn Danışmanlığı</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Ön Görüşme İçin Tarih Seçin</label>
                  <DatePicker 
                    date={selectedDate} 
                    setDate={handleDateChange}
                    placeholder="Görüşme tarihi seçiniz"
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
                    <button
                      type="button"
                      onClick={() => setIsKvkkModalOpen(true)}
                      className="text-accent underline font-semibold hover:text-primary transition-colors inline mr-1"
                    >
                      KVKK Aydınlatma Metni
                    </button>
                    'ni okudum ve kabul ediyorum. Talebimin işlenmesine onay veriyorum.
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
                      Gönderiliyor...
                    </span>
                  ) : (
                    "Hemen İletişime Geçin"
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
            <h2 className="text-xl font-bold font-serif-rewrite pb-10 text-primary-text mb-6">Hakkımda</h2>
            <p className=" text-gray-700 mb-5 text-2xl font-bold font-serif-rewrite mb-2">Danışmanımızı Yakından Tanıyın </p>
            <p className="text-gray-600  mb-4">Ben Nisanur Azer Psikolojik danışman ve bilişsel davranışçı terapist olarak çalışmaktayım. <br /></p>
            <p className="text-gray-600  mb-4">Marmara Üniversitesi Psikolojik Danışmanlık ve Rehberlik Bölümü’nden onur derecesiyle mezun olduktan sonra, Bilişsel Davranışçı Terapi alanında ileri düzey eğitimlerimi tamamladım. Mesleki gelişimimi desteklemek amacıyla yurt içinde ve yurt dışında birçok eğitim, seminer ve süpervizyon programına katıldım. <br /></p>
            <p className="text-gray-600  mb-4">Nobel Yayın Evi tarafından yayımlanan “Gençlerden Gençlere Yardım Rehberi” adlı kitapta Kaygı bölümünün yazarı olarak yer aldım. Akademik bilgi ile klinik uygulamayı bir araya getirmeyi önemseyen bir yaklaşımla çalışmalarımı sürdürmekteyim. <br /></p>
            <p className="text-gray-600  mb-4">Mesleki gelişim sürecimde İtalya, Hollanda ve Almanya başta olmak üzere birçok Avrupa ülkesinde çeşitli eğitimler ve seminerlere katıldım; ayrıca İtalya’da mesleki staj yaparak uluslararası uygulamaları yakından deneyimleme fırsatı buldum. <br /></p>
            <p className="text-gray-600  mb-4">2021 yılından bu yana bireysel psikolojik danışmanlık ve kariyer danışmanlığı hizmetleri sunmakta; bunun yanı sıra ailelere ve ebeveynlere yönelik psiko-eğitim programları düzenlemeye devam etmekteyim. <br /></p>
            <p className="text-gray-600  mb-4">Kariyerim boyunca; anksiyete, depresyon, travma sonrası stres bozukluğu (TSSB), ilişki problemleri, öfke yönetimi ve stres yönetimi gibi alanlarda destek arayan danışanlarla çalıştım. Terapideki temel amacım; danışanlarımın düşünce kalıplarını, duygusal ve davranışsal tepkilerini daha iyi fark etmelerine yardımcı olmak ve bu farkındalık doğrultusunda sağlıklı, kalıcı ve işlevsel değişim süreçlerine rehberlik etmektir. <br /></p>
            Çalışmalarımda bilimsel temelli, etik ilkelere bağlı ve danışan odaklı bir yaklaşımı esas almaktayım.

            <div className="flex flex-col sm:flex-row mt-10 gap-4">
              <a
                href="#randevu"
                className={` bg-accent text-white px-12 py-4 rounded-lg hover:bg-primary transition-colors font-semibold text-lg text-center `}
              >
                Hizmetler
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
                Hizmet Alanlarım
              </h2>
              <div className="mt-6 h-[3px] w-24 bg-primary" />
            </div>



          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#e6e9ef] rounded-xl overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.04)]">
            {[
              { title: "Kişisel Gelişim" },
              { title: "Stres Yönetimi" },
              { title: "Kaygı Bozuklukları" },
              { title: "İlişki Problemleri" },
              { title: "Depresyon" },
              { title: "Özsaygı ve Özgüven Geliştirme" },
              { title: "Ebeveyn / Aile Danışmanlığı" },
              { title: "Travma Sonrası İyileşme" },
            ].map(({ title }) => {
              const card = (
                <div className="flex h-full flex-col justify-between border-r border-b border-[#e6e9ef] bg-white px-6 py-10 transition duration-200 group-hover:bg-secondary/5 ">
                  <h3 className="text-2xl font-bold text-primary-text leading-tight">
                    {title}
                  </h3>
                  <span className="mt-10 text-md font-semibold text-primary group-hover:text-accent">
                    Detaylar..
                  </span>
                </div>
              );



              return (
                <div key={title} className="group h-full">
                  {card}
                </div>
              );
            })}
          </div>

          <p className="text-gray-600  mt-5   max-w-4xl  " >Her bir danışanım için özelleştirilmiş yaklaşımlar uygulayarak, daha sağlıklı bir yaşam sürmeniz için gerekli psikolojik destek ve rehberliği sağlamaktayım.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="randevu" className="py-8 mt-12 px-4  mb-16 sm:px-6 lg:px-8 bg-accent">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">Sizi Hemen Arayalım!</h2>
              <p className="text-md  text-white ">
                Destek almak için formu doldurun, uzman ekibimiz en kısa sürede sizi arasın.
                Güvenilir, gizli ve profesyonel psikolojik danışmanlık hizmetiyle yanınızdayız.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Adınız Soyadınız
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-[#d9dce3] bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c79b55] focus:border-transparent"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Telefon Numarınız
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-[#d9dce3] bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c79b55] focus:border-transparent"
                    placeholder="Telefon Numaranız"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 w-full bg-white text-primary-text  px-6 py-4 rounded-md font-semibold text-lg transition  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-primary"
              >
                Gönder
              </button>
            </form>
          </div>
        </div>
      </section>


      <BlogPosts />




    </div>
  );
}
