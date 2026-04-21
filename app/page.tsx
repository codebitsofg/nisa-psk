"use client";

import Link from "next/link";
import { useState } from "react";
import BlogPosts from "./comps/BlogPosts";
import Navigation from "./comps/Navigation";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    alert("Teşekkürler! En kısa sürede sizinle iletişime geçeceğiz.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className=" pb-20    mx-auto     flex items-center">
        <div className=" mx-auto w-full">
          <div className=" relative flex items-end justify-end bg-[url('https://images.unsplash.com/uploads/14122810486321888a497/1b0cc699?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] min-h-[100vh] bg-cover bg-center bg-no-repeat  mx-auto gap-12 items-center">
            <div className=" relative z-10   mx-auto  p-10 px-4 sm:px-6 lg:px-8  flex items-center justify-end flex-col rounded-3xl">
              {/* <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-serif-rewrite text-white mb-6 ">
                NA Psikolojik Danışmanlık ve Eğitim

              </h1> */}
              <img src="/logo.png" alt="NA Psikolojik Danışmanlık ve Eğitim" className=' bg-white rounded-full mb-10 w-40 h-auto' />
              <p className="text-md max-w-[40%]  text-center   text-white mb-8">
                Psikolojik danışmanlık hizmetleri, bireyin kendini daha iyi tanımasına; duygusal ve zihinsel farkındalığını geliştirmesine ve yaşam kalitesini artırmasına yönelik profesyonel bir destek sürecidir.
                Kendini daha yakından tanımak, kişisel gelişimini desteklemek ve yaşam kalitesini artırmak isteyen herkes psikolojik danışmanlık hizmetlerinden yararlanabilir.

              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#randevu"
                  className={` bg-accent text-white px-12 py-4 rounded-lg hover:bg-primary transition-colors font-semibold text-lg text-center `}
                >
                  Randevu Al
                </a>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-full z-0 bg-gradient-to-t from-accent via-transparent to-transparent "></div>
          </div>

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
              <p className="text-[18px] font-semibold tracking-wide text-primary uppercase">
                Hizmet Alanlarım
              </p>
              <h2 className="text-4xl sm:text-5xl font-serif-rewrite font-bold text-primary-text leading-tight ">
                Destek verdiğimiz
                <br />
                alanlar
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
