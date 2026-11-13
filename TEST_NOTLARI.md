# Test Notları

| Test Adımı | Kullanılan Girdi | Beklenen Sonuç | Gerçekleşen Sonuç | Karar |
| :--- | :--- | :--- | :--- | :--- |
| 1. Başlığın ayırt edici bölümü | `Copilot` | Yalnızca GitHub Copilot kartı görünür; sayaç 1 olur. | Yalnızca 1 kart göründü ve sayaç "1 sonuç gösteriliyor" yazdı. | Geçti |
| 2. Harf büyüklüğü ve boşluk | `  chatgpt  ` | ChatGPT kartı ile eşleşir. | Kenar boşlukları temizlendi ve ChatGPT kartı listelendi. | Geçti |
| 3. Olmayan bir ifade | `Photoshop` | Sayaç 0 olur ve boş sonuç mesajı görünür. | Sayaç "0 sonuç gösteriliyor" oldu ve uyarı mesajı göründü. | Geçti |
| 4. Temizle ve boşluk testi | `Temizle` / `   ` | Her iki durumda da 5 kartın tamamı görünür. | Temizle tuşuna basınca ve sadece boşluk yazılınca 5 kart da listelendi. | Geçti |
| 5. Menü bağlantıları | Ana Sayfa, İçerikler, Hakkında | Bağlantılar doğru sayfalara gider. | Tüm sayfalardaki ortak menü bağlantıları hatasız çalıştı. | Geçti |
| 6. Mobil (390px) ve Tab | 390px ekran + Tab tuşu | Yatay taşma olmaz; input ve düğmeye klavyeyle ulaşılır. | Yatay kaydırma çubuğu oluşmadı, Tab ile input ve Temizle butonuna odaklanıldı. | Geçti |