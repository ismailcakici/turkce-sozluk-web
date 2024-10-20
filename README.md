# Güncel Türkçe Sözlük Web Uygulaması

Bu proje, Türk Dil Kurumu'nun sunduğu API'yi kullanarak güncel Türkçe sözlük verilerine erişim sağlayan bir web uygulamasıdır. Amacım, mevcut TDK websitesinin kullanıcı deneyimi (UX) ve arayüz tasarımı (UI) açısından yetersiz olduğunu düşündüğüm alanları iyileştirerek, daha modern ve kullanışlı bir web uygulaması geliştirmekti.

## Demo

[Demo Link](https://ismailcakici.github.io/turkce-sozluk-web/)

## Kullanılan Teknolojiler

- React
- Typescript
- Tailwind CSS - Daisy UI

## API Kullanımı

- Kelime arama - `https://sozluk.gov.tr/gts?ara={kelime}`
- Sayfa içeriği - `https://sozluk.gov.tr/icerik`
- İşaret dili için harf gifleri - `https://sozluk.gov.tr/assets/img/isaret/{harf}.gif`
- Kelimenin ses kodunu almak için - `https://sozluk.gov.tr/yazim?ara={kelime}`
- Ses dosyasını almak için - `https://sozluk.gov.tr/ses/{sesKodu}.wav`
- Autocomplete için json dosyası - `https://sozluk.gov.tr/autocomplete.json`
