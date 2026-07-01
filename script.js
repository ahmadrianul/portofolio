document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. BILINGUAL LANGUAGE SWITCHER (EN / ID)
    // ==========================================
    const langData = {
        id: {
            "nav-home": "Home",
            "nav-about": "Tentang",
            "nav-skills": "Keahlian",
            "nav-experience": "Pengalaman",
            "nav-certifications": "Sertifikasi",
            "nav-contact": "Kontak",
            "hero-greeting": "Halo, saya",
            "hero-title": "Geofisika",
            "hero-desc": "Lulusan Baru Geofisika Universitas Hasanuddin dengan fondasi akademik yang kuat dalam interpretasi data bawah permukaan, manajemen data spasial, dan analisis mitigasi resiko. Saat ini, secara aktif mencari peluang profesional di berbagai sektor, termasuk operasional teknis, pemetaan geospasial, industri energi, maupun manajemen risiko lingkungan, di mana dapat mengaplikasikan keahlian analisis dan eksekusi lapangan untuk mencapai tujuan strategis.",
            "hero-cta-contact": "Hubungi Saya",
            "hero-cta-projects": "Lihat Proyek",
            "visual-inversi": "Inversi",
            "visual-subsurface": "Model Bawah Permukaan",
            "visual-analisis": "Analisis",
            "visual-data": "Data Geofisika, Geologi & Spatial",
            "about-title": "Tentang Saya",
            "about-profile": "Profil",
            "about-profile-desc-1": "Freshgraduate Geofisika dengan dedikasi tinggi pada eksplorasi bawah permukaan dan analisis risiko mitigasi. Memiliki keahlian teknis dalam mengoperasikan beberapa instrumen geofisika seperti mikrotremor, Ground Penetrating Radar (GPR), dan seismik, serta berpengalaman dalam melakukan interpretasi data bawah permukaan untuk berbagai proyek kampus.",
            "about-profile-desc-2": "Selain keahlian instrumen geofisika, memiliki pengalaman lapangan sebagai asisten lapangan, bertanggung jawab atas akuisisi data spasial dari Total Station dan Drone untuk pemetaan. Saat ini secara aktif mencari peluang profesional di industri tambang, energi, maupun mitigasi bencana yang menantang kemampuan dan pengalaman yang lebih luas.",
            "about-character": "Karakter Kerja",
            "about-education": "Pendidikan",
            "about-edu-degree": "Sarjana Geofisika | GPA: 3,75",
            "about-edu-scholarship": "<strong>Beasiswa:</strong> Penerima Beasiswa Prestasi Akademik dari Pemerintah Kabupaten Luwu Timur (2020–2024).",
            "about-edu-book": "<strong>Buku:</strong> Co-author Buku <span class=\"text-italic\">\"Prediksi Lintasan dan Laju Pusaran Siklon Tropis\"</span> ISBN: 9789795304852 (Unhas Press, 2023).",
            "about-lang": "Bahasa",
            "lang-name-id": "Bahasa Indonesia",
            "lang-level-native": "Native",
            "lang-name-en": "Inggris",
            "lang-level-passive": "Pasif",
            "skills-title": "Keahlian & Kompetensi",
            "skills-tech": "Keahlian Teknis",
            "skills-software": "Software & Alat",
            "skills-programming": "Bahasa Pemrograman",
            "exp-title": "Pengalaman & Proyek Akademik",
            "filter-all": "Semua",
            "filter-project": "Proyek & Riset",
            "filter-fieldwork": "Pekerjaan Lapangan",
            "filter-org": "Organisasi",
            "t1-title": "Aplikasi Web Interaktif",
            "t1-desc": "Sebuah aplikasi web interaktif yang dibangun menggunakan Python untuk mengotomatisasi dan memvisualisasikan ekstraksi kurva dispersi gelombang Rayleigh dari data seismik pasif (mikrotremor) menggunakan metode SPAC (Spatial Autocorrelation). Mendukung geometri array umum (tata letak segitiga sama sisi dan melingkar hingga 20 sesi), aplikasi ini menyederhanakan pemrosesan sinyal geofisika yang kompleks, menawarkan alat yang andal dan mudah diakses bagi para geofisikawan untuk pembuatan profil kecepatan gelombang geser (Vs) 1D dan karakterisasi lokasi.",
            "t1-bullet-1": "Mengintegrasikan kontrol kualitas jendela waktu otomatis (berdasarkan deteksi outlier RMSE) dan algoritma penumpukan (stacking) dua tahap untuk memangkas waktu pemrosesan data dari jam menjadi menit.",
            "t1-bullet-2": "Memungkinkan pengguna untuk mengunggah file seismik mentah, menyaring jendela data yang bising (noisy), dan menyesuaikan batas pemotongan frekuensi secara real-time.",
            "t1-bullet-3": "Mengekspor kurva dispersi yang cocok secara instan melalui antarmuka visual yang intuitif dan sangat interaktif.",
            "t1-link-demo": "Buka Aplikasi Streamlit",
            "t1-gallery": "Lihat Screenshot Aplikasi",
            "t2-title": "Proyek Mahasiswa",
            "t2-bullet-1": "Menganalisis karakteristik gelombang seismik dan memetakan Gempa Palu 2018 menggunakan Python (ObsPy) serta mengimplementasikan algoritma dari repositori localmag.",
            "t2-bullet-2": "Memproses dan menyaring katalog data kegempaan regional yang besar untuk memfokuskan analisis secara spesifik pada 2 event utama.",
            "t2-bullet-3": "Menginterpretasikan data waveform dari stasiun pemantau untuk mengukur parameter sumber gempa dan berhasil mengestimasi durasi minimum rekahan (rupture duration) sebesar 42 detik.",
            "t2-bullet-4": "Membuat skrip untuk memvisualisasikan data episenter menjadi peta sebaran seismik guna mempermudah analisis pola patahan dan kondisi tektonik regional.",
            "t2-link-github": "Repositori GitHub",
            "t2-gallery": "Lihat Galeri Foto (4 Foto)",
            "t3-title": "Operator Data Akuisisi & Teknisi Lapangan",
            "t3-bullet-1": "Mengeksekusi akuisisi data seismik pasif menggunakan sensor SmartSolo IGU-16HR 3C 2Hz pada lintasan 100 meter dengan konfigurasi array geometrik SPAC segitiga (jari-jari 4,62 m) di Desa Lonjoboko, Kabupaten Gowa.",
            "t3-bullet-2": "Memproses rekaman mikrotremor dengan mengekstraksi kurva dispersi melalui analisis koherensi spasial yang dicocokkan dengan fungsi Bessel jenis pertama orde nol (J_0).",
            "t3-bullet-3": "Melakukan pemodelan bawah permukaan 1D dengan menerapkan algoritma inversi Monte Carlo pada kurva dispersi untuk mengestimasi profil kecepatan gelombang geser (Vs) dan menentukan kedalaman lapisan batuan dasar.",
            "t3-bullet-4": "Mengarakterisasi 5 lapisan stratigrafi bawah permukaan dan menghitung nilai Vs30 sebesar 302,47 m/s untuk menetapkan klasifikasi lokasi sebagai Kelas Situs Tanah Sedang (SD) berdasarkan standar SNI 1726:2019.",
            "t3-gallery": "Lihat Galeri Foto (4 Foto)",
            "t4-title": "Operator Data Akuisisi (GPR)",
            "t4-bullet-1": "Mengoperasikan Ground Penetrating Radar (GPR) untuk melakukan pemetaan bawah permukaan dangkal secara nondestruktif untuk mengidentifikasi dugaan sisa struktur bangunan di Benteng Somba Opu.",
            "t4-bullet-2": "Mengeksekusi desain survei lapangan dengan mengumpulkan data pada 14 lintasan pengukuran.",
            "t4-bullet-3": "Memproses data mentah (raw data) radargram menggunakan perangkat lunak Geoprojector untuk memetakan persebaran objek tanpa harus melakukan ekskavasi konvensional.",
            "t4-bullet-4": "Menganalisis dan menginterpretasikan anomali amplitudo tinggi pada penampang radargram untuk mengidentifikasi sisa struktur bata benteng pada kedalaman 0,30 hingga 3 meter dengan fungsi permitivitas sebesar 5,5–5,7.",
            "t4-gallery": "Lihat Foto Survei GPR",
            "t5-title": "Analisis Petrofisika (Studi Kasus)",
            "t5-bullet-1": "Mengoperasikan perangkat lunak Interactive Petrophysics V3.5 untuk mengevaluasi data Triple Combo Log dari sumur Wellington-KGS-1-32 dan berhasil mengidentifikasi zona prospek hidrokarbon pada kedalaman 3.422 kaki (ft) dengan nilai rata-rata Gamma Ray sebesar 41,399 API.",
            "t5-bullet-2": "Melakukan perhitungan kuantitatif parameter petrofisika pada zona target yang menghasilkan saturasi air (Sw) sebesar 0,839, porositas efektif (PHIE) sebesar 0,0657, dan porositas total (PHIT) sebesar 0,0842.",
            "t5-bullet-3": "Validasi litologi batuan dominan formasi menggunakan analisis crossplot NPHI/RHOB, yang secara akurat mengonfirmasi batupasir (0,19363%) dan dolomit (0,24281%) sebagai komponen utama reservoir bawah permukaan.",
            "t5-gallery": "Lihat Galeri Foto (3 Foto)",
            "t6-title": "Asisten Lapangan Metode Pemetaan dan Drone",
            "t6-bullet-1": "Mengawasi dan membimbing lebih dari 220 mahasiswa Geofisika dalam melaksanakan akuisisi data spasial menggunakan total station, theodolite dan drone.",
            "t6-bullet-2": "Memberikan pelatihan kepada para praktisi tentang penggunaan Agisoft Metashape untuk pemrosesan fotogrametri drone yang sesuai dan penggunaan ArcGIS/QGIS untuk manajemen data, digitalisasi, dan pembuatan peta.",
            "t6-bullet-3": "Memberikan pengarahan teknis tentang metodologi survei topografi, khususnya metode poligon untuk memastikan penentuan batas dan koordinat yang akurat.",
            "t6-bullet-4": "Mendemonstrasikan penerapan perangkat lunak Surfer untuk melakukan interpolasi berbasis grid, menghasilkan peta kontur terperinci dan model permukaan dua dimensi.",
            "t6-bullet-5": "Melaksanakan jaminan dan kontrol data (QA/QC) pada semua data yang didapat di lapangan dan memberikan evaluasi kinerja serta skor penilaian.",
            "t6-gallery": "Lihat Galeri Foto (4 Foto)",
            "t7-title": "Ketua Divisi Akademik",
            "t7-bullet-1": "Menjadi pembicara di acara Learning Together I bersama member HAGI SC UH dengan lebih dari 15 anggota dengan tema \"Common Spatial Data in Python\".",
            "t7-bullet-2": "Bertanggung jawab untuk membuat dan mengerjakan program Learning Together II (Introduction to Basic Geoelectrics: Processing Geoelectrical Data with Res2Dinv) dengan lebih dari 10 peserta.",
            "t7-bullet-3": "Menyediakan 1 atau 2 konten edukasi setiap bulan di media sosial HAGI SC UH terkait Geofisika.",
            "t8-title": "Magang Geofisika",
            "t8-bullet-1": "Melakukan monitoring aktivitas seismik regional secara real-time menggunakan SeisComP untuk mengidentifikasi anomali struktural dengan cepat.",
            "t8-bullet-2": "Mengelola database pemantauan harian dari lebih dari 50 stasiun geofisika dengan merekam, memverifikasi, dan mengkatalogkan data kejadian gempa untuk menjaga integritas data.",
            "t8-bullet-3": "Melakukan pengolahan dan interpretasi awal data seismik dengan proses picking fase gelombang P dan S secara manual guna menentukan parameter hiposenter, episenter, kedalaman, dan magnitudo.",
            "t9-title": "Anggota Akademik",
            "t9-bullet-1": "Melaksanakan beberapa program divisi seperti Studi Instrumentasi Geofisika dan Geolistrik.",
            "t9-bullet-2": "Berhasil melaksanakan Geophysical Instrumental Studies (GIS) pada Automatic Weather Stations dengan lebih dari 30 peserta.",
            "t10-title": "KKN Tematik Kebencanaan Universitas Hasanuddin (Pengabdian Masyarakat)",
            "t10-bullet-1": "<strong>Pembuatan Peta Desa (PAPEDA):</strong> Menyusun peta administrasi infrastruktur Desa Limbong Wara berbasis data spasial spesifik menggunakan perangkat lunak GIS untuk penataan ruang desa yang akurat.",
            "t10-bullet-2": "<strong>Peta Risiko Kebencanaan:</strong> Menganalisis kondisi topografi daerah setempat untuk menghasilkan peta zonasi kerawanan bencana guna mendukung edukasi kesiapsiagaan bagi warga.",
            "t10-gallery": "Lihat Galeri Foto (2 Foto)",
            "t11-title": "Proyek Pemetaan Kawasan Lereng Bawakaraeng",
            "t11-bullet-1": "Mengolah data fotogrametri mentah dari hasil pemetaan drone kawasan lereng Gunung Bawakaraeng untuk menghasilkan model topografi 3D yang akurat pada area medan lereng.",
            "t11-bullet-2": "Melakukan rekonstruksi data spasial menggunakan sistem koordinat WGS 84 dan mengoperasikan perangkat lunak Agisoft Metashape untuk memproduksi Dense Clouds, Orthophotos, dan peta Orthomosaics.",
            "t11-bullet-3": "Menghasilkan dan menganalisis Digital Elevation Models (DEM) serta Digital Terrain Models (DTM) untuk merepresentasikan relief permukaan elevasi tanah.",
            "cert-title": "Lisensi, Sertifikasi & Publikasi",
            "pub-badge": "Publikasi Buku Terbit",
            "pub-title": "Prediksi Lintasan dan Laju Pusaran Siklon Tropis",
            "pub-desc": "Buku kolaboratif (sebagai co-author) yang membahas tentang model pemodelan dan prediksi lintasan serta pergerakan siklon tropis menggunakan parameter meteorologi dan geofisika.",
            "cert-c3-title": "Diklat Pra POP (Pengawas Operasional Pertama)",
            "cert-c11-title": "Finalist Transfest Lomba Maket Nasional",
            "cert-c12-title": "Juara 3 OSN Kebumian Luwu Timur",
            "cert-year-2026": "Tahun 2026",
            "cert-year-2025": "Tahun 2025",
            "cert-year-2024": "Tahun 2024",
            "cert-year-2023": "Tahun 2023",
            "cert-year-2022": "Tahun 2022",
            "cert-year-2021": "Tahun 2021",
            "cert-year-2019": "Tahun 2019",
            "cert-year-2018": "Tahun 2018",
            "about-edu-gpa": "GPA (IPK)",
            "about-highlights-cert": "Lisensi & Sertifikasi Relevan",
            "about-highlights-assistant": "Asisten Praktikum & Riset",
            "about-highlights-book": "Buku Terbit (Co-Author)",
            "about-edu-tag": "Universitas",
            "skills-soft": "Soft Skills & Bahasa",
            "contact-title": "Kontak Hubung",
            "contact-subtitle-heading": "Ayo Terhubung!",
            "contact-subtitle": "Saya selalu terbuka untuk berdiskusi tentang peluang magang/kerja, proyek kolaboratif, atau sekadar bertukar pikiran mengenai geofisika dan industri energi.",
            "contact-info-title-location": "Lokasi",
            "contact-info-title-email": "Email",
            "contact-info-title-phone": "Telepon / WA",
            "contact-form-title": "Kirim Pesan",
            "form-label-name": "Nama Lengkap",
            "form-label-email": "Alamat Email",
            "form-label-message": "Pesan Anda",
            "form-submit": "Kirim Pesan",
            "footer-copyright": "&copy; 2026 Ahmad Rianul Qauliah. All rights reserved.",
            "footer-note": "Dibuat khusus untuk portofolio geofisika. Dihosting dengan cinta di GitHub Pages."
        },
        en: {
            "nav-home": "Home",
            "nav-about": "About",
            "nav-skills": "Skills",
            "nav-experience": "Experience",
            "nav-certifications": "Certifications",
            "nav-contact": "Contact",
            "hero-greeting": "Hello, I am",
            "hero-title": "Geophysics",
            "hero-desc": "A Geophysics Graduate from Universitas Hasanuddin with a strong academic foundation in subsurface data interpretation, spatial data management, and risk mitigation analysis. Currently actively seeking professional opportunities in technical operations, geospatial mapping, the energy industry, or environmental risk management, where I can apply my analysis and field execution skills to achieve strategic goals.",
            "hero-cta-contact": "Contact Me",
            "hero-cta-projects": "View Projects",
            "visual-inversi": "Inversion",
            "visual-subsurface": "Subsurface Model",
            "visual-analisis": "Analysis",
            "visual-data": "Geophysical, Geological & Spatial Data",
            "about-title": "About Me",
            "about-profile": "Profile",
            "about-profile-desc-1": "A dedicated Geophysics graduate focused on subsurface exploration and natural hazard mitigation. Proficient in operating geophysical instruments such as microtremors, Ground Penetrating Radar (GPR), and seismics, with experience performing subsurface data interpretation for various academic projects.",
            "about-profile-desc-2": "In addition to geophysical instrument expertise, possesses field experience as a field assistant, responsible for spatial data acquisition from Total Station and Drones for mapping. Currently seeking professional opportunities in the mining, energy, and disaster mitigation industries that challenge abilities and broader experience.",
            "about-character": "Work Character",
            "about-education": "Education",
            "about-edu-degree": "Bachelor of Geophysics | GPA: 3.75",
            "about-edu-scholarship": "<strong>Scholarship:</strong> Recipient of Academic Achievement Scholarship from East Luwu Regency Government (2020–2024).",
            "about-edu-book": "<strong>Book:</strong> Co-author of Book <span class=\"text-italic\">\"Prediction of Tracks and Speed of Tropical Cyclone Vortex\"</span> ISBN: 9789795304852 (Unhas Press, 2023).",
            "about-lang": "Languages",
            "lang-name-id": "Indonesian",
            "lang-level-native": "Native",
            "lang-name-en": "English",
            "lang-level-passive": "Passive",
            "skills-title": "Skills & Competencies",
            "skills-tech": "Technical Skills",
            "skills-software": "Software & Tools",
            "skills-programming": "Programming Languages",
            "exp-title": "Experience & Academic Projects",
            "filter-all": "All",
            "filter-project": "Projects & Research",
            "filter-fieldwork": "Fieldwork",
            "filter-org": "Organizations",
            "t1-title": "Interactive Web Application",
            "t1-desc": "An interactive web application built with Python to automate and visualize the extraction of Rayleigh wave dispersion curves from passive seismic (microtremor) data using the SPAC (Spatial Autocorrelation) method. Supporting generalized array geometries (equilateral triangular and circular layouts up to 20 sessions), the app simplifies complex geophysical signal processing, offering geophysicists a robust, accessible tool for 1D shear-wave velocity (Vs) profiling and site characterization.",
            "t1-bullet-1": "Integrates automated time-window quality control (based on RMSE outlier detection) and a two-stage stacking algorithm to reduce data processing time from hours to minutes.",
            "t1-bullet-2": "Allows users to upload raw seismic files, filter noisy windows, and adjust frequency-cut bounds in real-time.",
            "t1-bullet-3": "Instantly exports the fitted dispersion curves through an intuitive and highly interactive visual interface.",
            "t1-link-demo": "Open Streamlit App",
            "t1-gallery": "View App Screenshot",
            "t2-title": "Student Project",
            "t2-bullet-1": "Analyzed seismic wave characteristics and mapped the 2018 Palu earthquake using Python (ObsPy) and implemented algorithms from the localmag repository.",
            "t2-bullet-2": "Processed and filtered large regional seismicity data catalogs to focus analysis specifically on 2 main events.",
            "t2-bullet-3": "Interpreted waveform data from monitoring stations to measure earthquake source parameters, successfully estimating a minimum rupture duration of 42 seconds.",
            "t2-bullet-4": "Developed scripts to visualize epicenter data into seismicity distribution maps for simplified fault pattern and regional tectonic analysis.",
            "t2-link-github": "GitHub Repository",
            "t2-gallery": "View Photo Gallery (4 Photos)",
            "t3-title": "Data Acquisition Operator & Field Technician",
            "t3-bullet-1": "Executed passive seismic data acquisition using SmartSolo IGU-16HR 3C 2Hz sensors on a 100-meter line with an equilateral triangular SPAC geometric array configuration (4.62 m radius) in Lonjoboko Village, Gowa Regency.",
            "t3-bullet-2": "Processed microtremor recordings by extracting dispersion curves through spatial autocorrelation analysis matched with the zeroth-order Bessel function of the first kind (J_0).",
            "t3-bullet-3": "Performed 1D subsurface modeling by applying Monte Carlo inversion algorithms on dispersion curves to estimate shear-wave velocity (Vs) profiles and determine bedrock depth.",
            "t3-bullet-4": "Characterized 5 subsurface stratigraphic layers and calculated a Vs30 value of 302.47 m/s to determine site classification as Site Class D (Medium Soil) based on SNI 1726:2019 standards.",
            "t3-gallery": "View Photo Gallery (4 Photos)",
            "t4-title": "Data Acquisition Operator (GPR)",
            "t4-bullet-1": "Operated Ground Penetrating Radar (GPR) to perform non-destructive shallow subsurface mapping to identify suspected building remnants at Benteng Somba Opu.",
            "t4-bullet-2": "Executed field survey design by collecting data across 14 measurement profiles.",
            "t4-bullet-3": "Processed raw radargram data using Geoprojector software to map object distribution without conventional excavation.",
            "t4-bullet-4": "Analyzed and interpreted high-amplitude anomalies on radargram profiles to identify fort brick structures at depths of 0.30 to 3 meters with a permittivity function of 5.5–5.7.",
            "t4-gallery": "View GPR Survey Photo",
            "t5-title": "Petrophysics Analysis (Case Study)",
            "t5-bullet-1": "Operated Interactive Petrophysics V3.5 software to evaluate Triple Combo Log data from the Wellington-KGS-1-32 well, successfully identifying hydrocarbon prospect zones at a depth of 3,422 feet (ft) with an average Gamma Ray value of 41.399 API.",
            "t5-bullet-2": "Conducted quantitative calculations of petrophysical parameters in target zones, yielding water saturation (Sw) of 0.839, effective porosity (PHIE) of 0.0657, and total porosity (PHIT) of 0.0842.",
            "t5-bullet-3": "Validated dominant formation lithology using NPHI/RHOB crossplot analysis, accurately confirming sandstone (0.19363%) and dolomite (0.24281%) as the main reservoir components.",
            "t5-gallery": "View Photo Gallery (3 Photos)",
            "t6-title": "Field Assistant for Mapping & Drone Methods",
            "t6-bullet-1": "Supervised and guided over 220 Geophysics students in executing spatial data acquisition using total station, theodolite, and drones.",
            "t6-bullet-2": "Provided training to practitioners on using Agisoft Metashape for drone photogrammetry processing and ArcGIS/QGIS for data management, digitization, and mapping.",
            "t6-bullet-3": "Provided technical guidance on topographic survey methodologies, specifically the traverse method, to ensure accurate boundaries and coordinate determination.",
            "t6-bullet-4": "Demonstrated the application of Surfer software for grid-based interpolation to produce detailed contour maps and 2D surface models.",
            "t6-bullet-5": "Executed data quality assurance and control (QA/QC) on all field data and provided performance evaluations and grading.",
            "t6-gallery": "View Photo Gallery (4 Photos)",
            "t7-title": "Head of Academic Division",
            "t7-bullet-1": "Guest speaker at Learning Together I with HAGI SC UH members (15+ attendees) on 'Common Spatial Data in Python'.",
            "t7-bullet-2": "Responsible for designing and executing Learning Together II (Introduction to Basic Geoelectrics: Processing Geoelectrical Data with Res2Dinv) with 10+ participants.",
            "t7-bullet-3": "Produced 1-2 monthly educational contents on Geophysics for HAGI SC UH social media.",
            "t8-title": "Geophysics Internship",
            "t8-bullet-1": "Monitored real-time regional seismic activity using SeisComP to quickly identify structural anomalies.",
            "t8-bullet-2": "Managed the daily monitoring database of 50+ geophysical stations by recording, verifying, and cataloging earthquake events to maintain data integrity.",
            "t8-bullet-3": "Processed and interpreted initial seismic data by manually picking P and S-wave phases to determine hypocenter, epicenter, depth, and magnitude parameters.",
            "t9-title": "Academic Division Member",
            "t9-bullet-1": "Executed several division programs such as Geophysical Instrumentation Studies and Geoelectrical Surveys.",
            "t9-bullet-2": "Successfully executed Geophysical Instrumental Studies (GIS) on Automatic Weather Stations with 30+ participants.",
            "t10-title": "KKN Tematik Kebencanaan Universitas Hasanuddin (Community Service)",
            "t10-bullet-1": "<strong>Village Mapping (PAPEDA):</strong> Compiled administrative and infrastructural maps of Limbong Wara Village based on specific spatial data using GIS software for accurate village spatial planning.",
            "t10-bullet-2": "<strong>Disaster Risk Mapping:</strong> Analyzed local topography to generate disaster risk zoning maps to support preparedness education for residents.",
            "t10-gallery": "View Photo Gallery (2 Photos)",
            "t11-title": "Bawakaraeng Slopes Mapping Project",
            "t11-bullet-1": "Processed raw photogrammetry data from drone mapping of the slopes of Mount Bawakaraeng to generate accurate 3D topographic models of the terrain.",
            "t11-bullet-2": "Performed spatial data reconstruction using the WGS 84 coordinate system and operated Agisoft Metashape software to produce Dense Clouds, Orthophotos, and Orthomosaic maps.",
            "t11-bullet-3": "Generated and analyzed Digital Elevation Models (DEM) and Digital Terrain Models (DTM) to represent terrain relief.",
            "cert-title": "Licenses, Certifications & Publications",
            "pub-badge": "Published Book",
            "pub-title": "Prediction of Tracks and Speed of Tropical Cyclone Vortex",
            "pub-desc": "Collaborative book (as co-author) discussing modeling and predicting tracks and speed of tropical cyclones using meteorological and geophysical parameters.",
            "cert-c3-title": "Pre-POP Training (First Line Operational Supervisor)",
            "cert-c11-title": "National Model Making Finalist - Transfest",
            "cert-c12-title": "3rd Place - National Science Olympiad (OSN) in Earth Science, East Luwu",
            "cert-year-2026": "2026",
            "cert-year-2025": "2025",
            "cert-year-2024": "2024",
            "cert-year-2023": "2023",
            "cert-year-2022": "2022",
            "cert-year-2021": "2021",
            "cert-year-2019": "2019",
            "cert-year-2018": "2018",
            "about-edu-gpa": "GPA (IPK)",
            "about-highlights-cert": "Relevant Licenses & Certifications",
            "about-highlights-assistant": "Practicum & Research Assistant",
            "about-highlights-book": "Published Book (Co-Author)",
            "about-edu-tag": "University",
            "skills-soft": "Soft Skills & Languages",
            "contact-title": "Contact Me",
            "contact-subtitle-heading": "Let's Connect!",
            "contact-subtitle": "I am always open to discussing internship/employment opportunities, collaborative projects, or simply exchanging thoughts on geophysics and the energy industry.",
            "contact-info-title-location": "Location",
            "contact-info-title-email": "Email",
            "contact-info-title-phone": "Phone / WA",
            "contact-form-title": "Send Message",
            "form-label-name": "Full Name",
            "form-label-email": "Email Address",
            "form-label-message": "Your Message",
            "form-submit": "Send Message",
            "footer-copyright": "&copy; 2026 Ahmad Rianul Qauliah. All rights reserved.",
            "footer-note": "Specifically made for geophysics portfolio. Hosted with love on GitHub Pages."
        }
    };

    const langToggleBtn = document.getElementById('lang-toggle');
    const langLabel = document.getElementById('lang-label');
    
    // Check local storage for language preference, default is 'id' (Indonesian)
    let currentLang = localStorage.getItem('portfolio-lang') || 'id';
    
    const setLanguage = (lang) => {
        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            if (langData[lang] && langData[lang][key]) {
                el.innerHTML = langData[lang][key];
            }
        });
        document.querySelectorAll('[data-placeholder-en]').forEach(el => {
            const key = el.getAttribute('data-lang');
            if (langData[lang] && langData[lang][key]) {
                el.setAttribute('placeholder', langData[lang][key]);
            } else {
                // Fallbacks for placeholder translations
                const defaultPlaceholders = {
                    "form-placeholder-name": lang === 'en' ? 'Full Name' : 'Nama Lengkap',
                    "form-placeholder-email": lang === 'en' ? 'Email Address' : 'Alamat Email',
                    "form-placeholder-message": lang === 'en' ? 'Your Message' : 'Pesan Anda'
                };
                if (defaultPlaceholders[key]) {
                    el.setAttribute('placeholder', defaultPlaceholders[key]);
                }
            }
        });
        
        // Handle specific photo gallery captions if they have data-captions-en / data-captions-id
        document.querySelectorAll('[data-captions-en]').forEach(el => {
            el.setAttribute('data-captions', el.getAttribute(`data-captions-${lang}`));
        });

        // Set the active language label
        langLabel.textContent = lang.toUpperCase();
        
        // Save preference
        localStorage.setItem('portfolio-lang', lang);
        document.documentElement.setAttribute('lang', lang);
        currentLang = lang;
    };
    
    // Initial load
    setLanguage(currentLang);
    
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const nextLang = currentLang === 'id' ? 'en' : 'id';
            setLanguage(nextLang);
        });
    }

    // ==========================================
    // 1C. LIGHT / DARK THEME TOGGLE
    // ==========================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;
    
    // Check local storage for theme preference
    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (themeToggleBtn && themeIcon) {
        if (currentTheme === 'light') {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }

        themeToggleBtn.addEventListener('click', () => {
            if (document.body.classList.contains('dark-theme')) {
                document.body.classList.replace('dark-theme', 'light-theme');
                themeIcon.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('theme', 'light');
            } else {
                document.body.classList.replace('light-theme', 'dark-theme');
                themeIcon.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // ==========================================
    // 2. SCROLL PROGRESS & HEADER SCROLL EFFECT
    // ==========================================
    const mainHeader = document.getElementById('main-header');
    const scrollProgress = document.getElementById('scroll-progress');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        
        // Update progress bar
        scrollProgress.style.width = `${scrollPercent}%`;

        // Update header background
        if (scrollTop > 50) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    });

    // ==========================================
    // 3. MOBILE MENU NAVIGATION
    // ==========================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNavPanel = document.getElementById('mobile-nav-panel');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    const toggleMenu = () => {
        mobileMenuBtn.classList.toggle('active');
        mobileNavPanel.classList.toggle('open');
        
        // Prevent body scrolling when menu is open
        document.body.style.overflow = mobileNavPanel.classList.contains('open') ? 'hidden' : '';
    };

    mobileMenuBtn.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileNavPanel.classList.contains('open')) {
                toggleMenu();
            }
        });
    });

    // Close mobile menu when window is resized above mobile threshold
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && mobileNavPanel.classList.contains('open')) {
            toggleMenu();
        }
    });

    // ==========================================
    // 4. ACTIVE LINK ON SCROLL (INTERSECTION OBSERVER)
    // ==========================================
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const mNavLinks = document.querySelectorAll('.mobile-nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px', // trigger when section covers middle portion of screen
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.getAttribute('id');
                
                // Desktop Link update
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${activeId}`) {
                        link.classList.add('active');
                    }
                });

                // Mobile Link update
                mNavLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${activeId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // ==========================================
    // 5. TIMELINE FILTERING LOGIC
    // ==========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const timelineItems = document.querySelectorAll('.timeline-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from other buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            timelineItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (filterValue === 'all' || itemCategory === filterValue) {
                    // Show item
                    item.style.display = 'block';
                    // Retrigger simple entrance animation
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    // Hide item
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300); // match transitional styling duration
                }
            });
        });
    });

    // ==========================================
    // 6. SCROLL REVEAL ANIMATION
    // ==========================================
    const revealElements = document.querySelectorAll('.animate-reveal');
    
    const revealObserverOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Trigger only once
            }
        });
    }, revealObserverOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // ==========================================
    // 7. CONTACT FORM SUBMISSION HANDLING
    // ==========================================
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nameInput = document.getElementById('name').value;
            const accessKeyInput = contactForm.querySelector('input[name="access_key"]').value;

            // Pastikan user sudah mengganti placeholder key
            if (accessKeyInput === 'YOUR_ACCESS_KEY_HERE') {
                formStatus.style.display = 'block';
                formStatus.className = 'form-status error';
                formStatus.innerHTML = currentLang === 'en'
                    ? `<i class="fas fa-exclamation-circle"></i> Please replace 'YOUR_ACCESS_KEY_HERE' with your Web3Forms Access Key in index.html first.`
                    : `<i class="fas fa-exclamation-circle"></i> Mohon ganti 'YOUR_ACCESS_KEY_HERE' dengan Access Key Web3Forms Anda di file index.html terlebih dahulu.`;
                return;
            }

            // Form Status: Loading state
            formStatus.style.display = 'block';
            formStatus.className = 'form-status';
            formStatus.textContent = currentLang === 'en' ? 'Sending message...' : 'Mengirim pesan...';
            
            const formData = new FormData(contactForm);
            
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    // Success
                    formStatus.className = 'form-status success';
                    formStatus.innerHTML = currentLang === 'en'
                        ? `<i class="fas fa-check-circle"></i> Thank you ${nameInput}, your message was sent successfully! I will contact you soon.`
                        : `<i class="fas fa-check-circle"></i> Terima kasih ${nameInput}, pesan Anda berhasil dikirim! Saya akan segera menghubungi Anda.`;
                    contactForm.reset();
                } else {
                    // API Error Response
                    console.log(response);
                    formStatus.className = 'form-status error';
                    formStatus.innerHTML = currentLang === 'en'
                        ? `<i class="fas fa-exclamation-circle"></i> Sorry, an error occurred: ${json.message}`
                        : `<i class="fas fa-exclamation-circle"></i> Maaf, terjadi kesalahan: ${json.message}`;
                }
            })
            .catch(error => {
                // Connection/Network Error
                console.log(error);
                formStatus.className = 'form-status error';
                formStatus.innerHTML = currentLang === 'en'
                    ? `<i class="fas fa-exclamation-circle"></i> Sorry, a network error occurred while sending the message.`
                    : `<i class="fas fa-exclamation-circle"></i> Maaf, terjadi kesalahan jaringan saat mengirim pesan.`;
            })
            .then(() => {
                // Sembunyikan status setelah 5 detik
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            });
        });
    }

    // ==========================================
    // 8. LIGHTBOX MODAL GALLERY
    // ==========================================
    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-img');
    const modalCaption = document.getElementById('modal-caption');
    const closeModal = document.querySelector('.close-modal');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const openGalleryBtns = document.querySelectorAll('.open-gallery-btn');

    let currentImages = [];
    let currentCaptions = [];
    let currentIndex = 0;

    if (modal && openGalleryBtns.length > 0) {
        openGalleryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const imagesStr = btn.getAttribute('data-images');
                const captionsStr = btn.getAttribute('data-captions') || '';
                
                if (imagesStr) {
                    currentImages = imagesStr.split(',').map(s => s.trim());
                    currentCaptions = captionsStr ? captionsStr.split(',').map(s => s.trim()) : [];
                    currentIndex = 0;
                    
                    showImage(currentIndex);
                    modal.style.display = 'flex';
                    setTimeout(() => modal.classList.add('show'), 10);
                    document.body.style.overflow = 'hidden'; // prevent background scroll
                }
            });
        });

        const showImage = (index) => {
            modalImg.src = currentImages[index];
            
            // Set caption
            if (currentCaptions[index]) {
                modalCaption.textContent = currentCaptions[index];
            } else {
                modalCaption.textContent = `Foto ${index + 1} dari ${currentImages.length}`;
            }

            // Hide/show navigation buttons based on image count
            if (currentImages.length <= 1) {
                prevBtn.style.display = 'none';
                nextBtn.style.display = 'none';
            } else {
                prevBtn.style.display = 'flex';
                nextBtn.style.display = 'flex';
            }
        };

        const navigateImage = (direction) => {
            if (direction === 'next') {
                currentIndex = (currentIndex + 1) % currentImages.length;
            } else if (direction === 'prev') {
                currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
            }
            showImage(currentIndex);
        };

        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navigateImage('prev');
        });
        
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navigateImage('next');
        });

        // Close modal when Close Button is clicked
        closeModal.addEventListener('click', () => {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
            document.body.style.overflow = '';
        });

        // Close modal when clicking outside the content
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('modal-content')) {
                modal.classList.remove('show');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300);
                document.body.style.overflow = '';
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (modal.classList.contains('show')) {
                if (e.key === 'ArrowRight') navigateImage('next');
                if (e.key === 'ArrowLeft') navigateImage('prev');
                if (e.key === 'Escape') {
                    modal.classList.remove('show');
                    setTimeout(() => {
                        modal.style.display = 'none';
                    }, 300);
                    document.body.style.overflow = '';
                }
            }
        });
    }
});

