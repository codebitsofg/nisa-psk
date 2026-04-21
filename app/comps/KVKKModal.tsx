"use client";

import React from "react";
import { X } from "lucide-react";

interface KVKKModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const KVKKModal = ({ isOpen, onClose }: KVKKModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-primary-text font-serif-rewrite">
            KVKK Aydınlatma Metni
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        <div className="p-8 overflow-y-auto text-gray-700 space-y-4">
          <p className="font-semibold">6698 SAYILI KİŞİSEL VERİLERİN KORUNMASI KANUNU (KVKK) AYDINLATMA METNİ</p>
          <p>
            Bu aydınlatma metni, veri sorumlusu sıfatıyla **NA Psikolojik Danışmanlık ve Eğitim** tarafından, 6698 sayılı Kişisel Verilerin Korunması Kanunu’nun 10. maddesi ve Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ uyarınca hazırlanmıştır.
          </p>
          <h3 className="font-bold text-lg pt-2">1. Kişisel Verilerin İşlenme Amacı</h3>
          <p>
            Toplanan kişisel verileriniz (Ad, Soyad, Telefon, E-posta, Hizmet Tercihi), aşağıdaki amaçlarla işlenmektedir:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>İletişim faaliyetlerinin yürütülmesi</li>
            <li>Randevu ve ön görüşme taleplerinin yönetilmesi</li>
            <li>Hizmet satış sonrası destek hizmetlerinin yürütülmesi</li>
            <li>Müşteri ilişkileri yönetimi süreçlerinin planlanması ve icrası</li>
          </ul>
          <h3 className="font-bold text-lg pt-2">2. Kişisel Verilerin Aktarılması</h3>
          <p>
            Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda, yasal yükümlülüklerimizi yerine getirmek amacıyla yetkili kamu kurum ve kuruluşları ile paylaşılabilecektir. Verileriniz üçüncü şahıslara ticari amaçlarla satılmamaktadır.
          </p>
          <h3 className="font-bold text-lg pt-2">3. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h3>
          <p>
            Kişisel verileriniz, web sitemiz üzerindeki iletişim formu aracılığıyla elektronik ortamda toplanmaktadır. Bu veriler, Kanun’un 5. maddesinde belirtilen “ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması” hukuki sebebine dayalı olarak işlenmektedir.
          </p>
          <h3 className="font-bold text-lg pt-2">4. İlgili Kişinin Hakları</h3>
          <p>
            Kanun’un 11. maddesi uyarınca, verilerinizin işlenip işlenmediğini öğrenme, yanlış işlenmişse düzeltilmesini isteme, silinmesini veya yok edilmesini talep etme gibi haklara sahipsiniz. Bu haklarınızı kullanmak için bizimle iletişime geçebilirsiniz.
          </p>
        </div>
        <div className="p-6 border-t bg-gray-50 text-right">
          <button
            onClick={onClose}
            className="bg-accent text-white px-8 py-2 rounded-lg hover:bg-primary transition-colors font-semibold"
          >
            Anladım
          </button>
        </div>
      </div>
    </div>
  );
};

export default KVKKModal;
