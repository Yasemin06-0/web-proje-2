# AI Kullanım Kaydı

## Kullanılan Prompt'lar ve Amaçları

1. **Prompt 1 (Planlama):** "Yapay zeka araçları hakkında üniversite öğrencileri ve teknoloji meraklıları için üç sayfalık bir site tasarlıyorum. Beş içerik başlığım şunlar: ChatGPT, Midjourney, GitHub Copilot, Notion AI, Perplexity AI. HTML, CSS ve JavaScript kullanacağım. Ortak menüyü ve başlığa göre aramayı nasıl kurabilirim? Önce dosyaları ve kabul ölçütlerini öner; henüz kod yazma."
   - **Amaç:** Kod yazmaya geçmeden önce dosya yapısını ve kabul ölçütlerini planlamak.

2. **Prompt 2 (HTML ve CSS):** "Şimdi index.html, icerikler.html, hakkinda.html ve ortak style.css yapısını oluştur. Ortak menü tüm sayfalarda aynı olsun ve 390px mobil ekranda yatay taşma yapmasın."
   - **Amaç:** Üç sayfa arasında tutarlı navigasyon ve mobil uyumlu tasarım oluşturmak.

3. **Prompt 3 (JavaScript Filtreleme):** "Şimdi script.js içinde arama kutusuna yazdıkça büyük/küçük harf duyarsız ve trim uygulanmış şekilde sadece kart başlıklarını filtreleyen, sonuç sayacını güncelleyen, boş sonuç mesajı gösteren ve Temizle düğmesi çalışan kodu yaz."
   - **Amaç:** Kullanıcı deneyimini artıran anlık başlık arama mekanizmasını kurmak.

## Öneri Değerlendirmesi ve Kod İncelemesi (Code Review)

- **Kabul Edilen / Değiştirilen Öneri:** AI başlangıçta tüm kart metninde arama yapmayı önerdi ancak ödev gereği yalnızca başlık (`h2`) içinde arama yapılacak şekilde filtrelemeyi düzenledim. Ayrıca 390px genişlikte arama kutusu ve düğmenin taşmaması için CSS'te `@media (max-width: 420px)` kuralını ekleyerek alt alta hizaladım.
- **Event Listener Açıklaması:** `searchInput.addEventListener("input", filterCards)` satırı, kullanıcı arama kutusuna her harf yazdığında veya sildiğinde `filterCards` fonksiyonunu anlık olarak tetikler.
- **Filtreleme Koşulu Açıklaması:** `title.includes(query)` koşulu, küçük harfe çevrilmiş ve kenar boşlukları temizlenmiş kart başlığının aranan kelimeyi içerip içermediğini kontrol eder; eşleşiyorsa kartı görünür bırakır, eşleşmiyorsa gizler.