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
      <section className="pt-60 pb-20    mx-auto  bg-gradient-to-b  from-accent via-secondary to-white min-h-[800px] flex items-center">
        <div className=" mx-auto w-full">
          <div className="grid lg:grid-cols-2  px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-serif-rewrite text-white mb-6 ">
                NA Psikolojik Danışmanlık ve Eğitim

              </h1>
              <p className="text-md max-w-[80%]    text-white mb-8">
                Psikolojik destek ihtiyacınız olduğunda, size en iyi şekilde yardımcı olabilmek için online ve yüz yüze danışmanlık hizmeti sunuyorum. Türkiye ve yurt dışında, özellikle Almanya'da, çeşitli danışmanlık ihtiyaçlarınız için yanınızdayım.
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
            <div className="hidden lg:block">
              <img src="/hero.png" alt="About" className="w-full h-full object-cover rounded-3xl" />
            </div>
          </div>

          {/* About Section */}
          <section id="hakkimda" className="py-20 pt-24   pl-5 gap-5 flex flex-row">
            <div className="min-w-[300px]   flex-1 p-16">
              <img src="/therapy.jpg" alt="About" className="w-full h-full object-cover" />
            </div>
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white  p-8 shadow-lg  py-16 text-left">
                <h2 className="text-xl font-bold font-serif-rewrite pb-10 text-primary-text mb-6">Hakkımda</h2>
                <p className=" text-gray-700 mb-5 text-2xl font-bold font-serif-rewrite mb-2">Bizi daha yakından tanıyın</p>
                <p className="text-gray-600  mb-4 ">
                  Ben <strong className="text-primary-text">Nisanur Azer</strong>, psikolojik danışman/bilişsel davranışçı terapistim. Marmara Üniversitesi Psikolojik Danışmanlık ve Rehberlik bölümünden onur derecesiyle mezun olduktan sonra Bilişsel Davranışçı Terapi alanında ileri düzey eğitimimi tamamladım.
                </p>


                <p className="text-gray-600  mb-4">
                  2021 yılından beri psikolojik danışmanlık, kariyer danışmanlığı vermekte ve aile, ebeveyn psiko-eğitimleri vermeyi sürdürmekteyim. Kariyerim boyunca, anksiyete, depresyon, travma sonrası stres bozukluğu (TSSB), ilişki problemleri, öfke yönetimi, stres yönetimi ve benzeri duygusal zorluklarla başa çıkmak isteyen danışanlarla çalıştım.
                </p>
                <p className="text-gray-600 ">
                  Terapideki temel amacım, danışanlarımın düşünce kalıplarını, duygusal ve davranışsal tepkilerini daha iyi anlamalarına yardımcı olmak ve sağlıklı değişim süreçlerine rehberlik etmektir.
                </p>
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
                Çalışma Alanlarımız
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
              { title: "Bireysel (Yetişkin) Terapisi" },
              { title: "Ergen Terapisi" },
              { title: "Çocuk Terapisi" },
              { title: "Çift ve Evlilik Terapisi" },
              { title: "Online Danışmanlık" },
              { title: "Almanya'da Yüz Yüze Danışmanlık" },
              { title: "İlişki Problemleri" },
              { title: "Aile / Ebeveyn Danışmanlığı" },
              { title: "Travma Sonrası İyileşme" },
              { title: "Psikoeğitim", href: "/psikoegitim" },
              { title: "Oyun Terapisi", href: "/oyun-terapisi" },
              { title: "Bilişsel Davranışçı Terapi (BDT)", href: "/bdt" },
            ].map(({ title, href }) => {
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
