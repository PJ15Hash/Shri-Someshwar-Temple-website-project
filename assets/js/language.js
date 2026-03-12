const defaultLang = 'en';

const translationsData = {
  en: {
    // Navigation
    "nav_home": "Home",
    "nav_about": "About",
    "nav_timings": "Timings",
    "nav_gallery": "Gallery",
    "nav_committee": "Committee",
    "nav_donations": "Donations",
    "nav_contact": "Contact",

    // Topbar
    "topbar_text": "|| ॐ Shri Someshwara Prasanna ||",

    // Brand
    "brand_title": "Shri Someshwara Temple",
    "brand_subtitle": "Hoskeri, Gokarna",

    // Index - Hero
    "hero_title": "Shri Someshwara Temple Hoskeri, Gokarna",
    "hero_badge": "About the Temple",

    // Index - Temple Highlights (New)
    "highlights_title": "Temple Highlights",
    "hl1_title": "Ancient Heritage",
    "hl1_desc": "A historical shrine preserving centuries-old traditions and architecture in the heart of Gokarna.",
    "hl2_title": "Daily Poojas",
    "hl2_desc": "Experience divine peace through regular rituals, morning aartis, and evening prayers.",
    "hl3_title": "Community Sevas",
    "hl3_desc": "Participate in noble causes like Annadanam and special community welfare programs.",
    "hl4_title": "Sacred Festivals",
    "hl4_desc": "Vibrant celebrations including Maha Shivratri and Deepotsava held with great devotion.",

    // Index - Upcoming Festivals (New)
    "festivals_title": "Upcoming Festivals",
    "fest1_name": "Maha Shivratri",
    "fest1_date": "26 Feb 2025",
    "fest1_desc": "A night-long celebration of Lord Shiva with special Abhishekas and cultural programs.",
    "fest2_name": "Chaitra Purnima",
    "fest2_date": "13 Apr 2025",
    "fest2_desc": "Special prayers and temple car festival marking the auspicious full moon day.",
    "fest3_name": "Vasantha Panchami",
    "fest3_date": "02 Feb 2025",
    "fest3_desc": "Welcoming the spring season with special floral decorations and prayers.",

    // Index - Devotee Experience (New)
    "testimonials_title": "Devotee Experience",
    "test1_text": "A visit to Shri Someshwara Temple is a deeply spiritual experience. The serenity here is unmatched.",
    "test1_author": "Rajesh Kumar",
    "test1_location": "Bangalore",
    "test2_text": "The management of the temple and the devotion of the priests is truly inspiring. Must visit when in Gokarna.",
    "test2_author": "Suman Hegde",
    "test2_location": "Sirsi",
    "test3_text": "Participating in the evening aarti brought me so much peace. A beautiful and well-maintained temple.",
    "test3_author": "Anjali Sharma",
    "test3_location": "Mumbai",

    // Index - How to Reach (New)
    "reach_title": "How to Reach",
    "reach_road_title": "By Road",
    "reach_road_desc": "Well-connected by KSRTC and private buses. 10 mins drive from Gokarna main bus stand.",
    "reach_train_title": "By Train",
    "reach_train_desc": "Gokarna Road Station is the nearest stop (15 mins away). Auto-rickshaws are easily available.",
    "reach_air_title": "By Air",
    "reach_air_desc": "Dabolim Airport (Goa) is about 140km away. Taxis available for a scenic drive to Hoskeri.",

    // Index - Rituals Card (Existing, moved below highlights in UI usually)
    "rituals_title": "Daily Rituals",
    "rituals_darshan": "General Dharshan Timings:",
    "rituals_darshan_time": "7AM - 8PM",
    "rituals_festivals": "Festivals:",
    "rituals_festivals_list": "Makar Sankranti, Maha Shivratri, Chaitra Purnima, Ganesh Chaturthi",
    "rituals_desc": "Morning & evening aarti, bhajans and regular poojas for devotees.",

    // Index - Temple Schedule (New)
    "schedule_title": "Temple Schedule",
    "schedule_desc": "Join us for daily poojas and darshan. The temple is open for all devotees during these hours.",
    "sched_morning_title": "Morning Darshan & Pooja",
    "sched_morning_time": "06:00 AM - 12:30 PM",
    "sched_morning_desc": "Includes Suprabhata, Abhisheka, and Maha Pooja.",
    "sched_evening_title": "Evening Darshan & Aarti",
    "sched_evening_time": "04:30 PM - 08:30 PM",
    "sched_evening_desc": "Includes Sandhya Aarti, Bhajans, and Ratri Pooja.",

    // Index - Festivals & Celebrations (New)
    "fest_celeb_title": "Festivals & Celebrations",
    "fest_celeb_desc": "The temple celebrates several major festivals every year with great grandeur and community participation:",
    "fest_shivratri_title": "Maha Shivratri",
    "fest_shivratri_desc": "Night-long vigil with abhishekam, rudrabhisheka, and bhajans",
    "fest_chaitra_title": "Chaitra Purnima",
    "fest_chaitra_desc": "Annual community feast and special procession",
    "fest_ganesh_title": "Ganesh Chaturthi",
    "fest_ganesh_desc": "Ganesha pooja and cultural programmes",
    "fest_makar_title": "Makar Sankranti",
    "fest_makar_desc": "Tilgul distribution and special poojas",
    "fest_naga_title": "Naga Panchami",
    "fest_naga_desc": "Worship of the Naga shrine with milk abhisheka",
    "fest_ugadi_title": "Ugadi",
    "fest_ugadi_desc": "Kannada & Tulu New Year celebrations",

    // Committee Page
    "committee_banner_title": "Temple Committee",
    "committee_banner_subtitle": "Dedicated Trust Members",
    "committee_section_title": "Board of Trustees",
    "member_role_president": "President",
    "member_role_secretary": "Secretary",
    "member_role_treasurer": "Treasurer",
    "member_role_member": "Trust Member",
    
    "member_1_name": "Shri Ramachandra Bhat",
    "member_1_role": "President",
    "member_1_phone": "+91 98450 12341",
    "member_1_email": "r.bhat@example.com",
    "member_2_name": "Shri Mahabaleshwar Hegde",
    "member_2_role": "Secretary",
    "member_2_phone": "+91 98450 12342",
    "member_2_email": "m.hegde@example.com",
    "member_3_name": "Shri Ganapati Naik",
    "member_3_role": "Treasurer",
    "member_3_phone": "+91 98450 12343",
    "member_3_email": "g.naik@example.com",
    "member_4_name": "Shri Subramanya Bhat",
    "member_4_role": "Trust Member",
    "member_4_phone": "+91 98450 12344",
    "member_4_email": "s.bhat@example.com",
    "member_5_name": "Shri Venkatesh Prabhu",
    "member_5_role": "Trust Member",
    "member_5_phone": "+91 98450 12345",
    "member_5_email": "v.prabhu@example.com",
    "member_6_name": "Shri Krishna Murthy",
    "member_6_role": "Trust Member",
    "member_6_phone": "+91 98450 12346",
    "member_6_email": "k.murthy@example.com",
    "member_7_name": "Shri Manjunath Gouda",
    "member_7_role": "Trust Member",
    "member_7_phone": "+91 98450 12347",
    "member_7_email": "m.gouda@example.com",
    "member_8_name": "Shri Shankar Narayan",
    "member_8_role": "Trust Member",
    "member_8_phone": "+91 98450 12348",
    "member_8_email": "s.narayan@example.com",
    "member_9_name": "Shri Raghavendra Rao",
    "member_9_role": "Trust Member",
    "member_9_phone": "+91 98450 12349",
    "member_9_email": "r.rao@example.com",
    "member_10_name": "Shri Dattatraya Bhat",
    "member_10_role": "Trust Member",
    "member_10_phone": "+91 98450 12350",
    "member_10_email": "d.bhat@example.com",
    "member_11_name": "Shri Ishwar Naik",
    "member_11_role": "Trust Member",
    "member_11_phone": "+91 98450 12351",
    "member_11_email": "i.naik@example.com",
    "member_12_name": "Shri Narayana Hegde",
    "member_12_role": "Trust Member",
    "member_12_phone": "+91 98450 12352",
    "member_12_email": "n.hegde@example.com",
    "member_13_name": "Shri Vasudev Prabhu",
    "member_13_role": "Trust Member",
    "member_13_phone": "+91 98450 12353",
    "member_13_email": "v.prabhu2@example.com",
    "member_14_name": "Shri Ramesh Naik",
    "member_14_role": "Trust Member",
    "member_14_phone": "+91 98450 12354",
    "member_14_email": "r.naik@example.com",
    "member_15_name": "Shri Suresh Bhat",
    "member_15_role": "Trust Member",
    "member_15_phone": "+91 98450 12355",
    "member_15_email": "s.bhat2@example.com",

    // Index - Gallery Preview
    "gallery_preview_title": "Gallery Preview",

    // Index - Announcements
    "announcements_title": "Temple Announcements",
    "ann1_date": "January 15, 2025",
    "ann1_title": "Maha Shivratri Celebrations",
    "ann1_desc": "Join us for the grand Maha Shivratri festivities. Special abhishekam and night-long bhajans. Prasadam will be distributed to all devotees.",
    "ann1_badge": "Important",
    "ann2_date": "January 10, 2025",
    "ann2_title": "Special Pooja Timings",
    "ann2_desc": "Updated temple timings for the upcoming festival season. Morning pooja starts at 5:30 AM. Please plan your visit accordingly.",
    "ann2_badge": "Event",
    "ann3_date": "January 5, 2025",
    "ann3_title": "Annadanam Program Launch",
    "ann3_desc": "New daily annadanam (free food distribution) program starting this month. Seeking volunteers and sponsors for this noble cause.",
    "ann3_badge": "General",

    // About page (Redesigned)
    "about_banner_title": "About the Temple",
    "about_banner_subtitle": "History & Heritage",
    "about_main_title": "Shri Someshwara Temple: Origins & Legacy",
    "about_origins_title": "Divine Beginnings",
    "about_p1": "The Shri Someshwara Temple in Hoskeri, Gokarna, is a sacred shrine dedicated to Lord Shiva, appearing here as Someshwara — the Lord of the Moon. This ancient site has served as a beacon of spiritual solace and cultural continuity for over several centuries, deeply intertwined with the sacred geography of Gokarna.",
    "about_p2": "According to local oral traditions, the temple's origins are rooted in the discovery of a 'Swayambhu' (self-manifested) Linga by early settlers of the Hoskeri region. Ancient sages are said to have performed intense penance here, sanctifying the grounds and establishing the temple as a pivotal point where Vedic rituals and local folk traditions harmoniously coexist.",
    "about_p3": "The temple's architecture, characterized by its traditional coastal Dravidian style, speaks of the skilled craftsmanship and devotion of past generations. Through the patronage of local families and the unwavering faith of the community, the temple has evolved from a small forest shrine into the magnificent structure that stands today, preserving its pristine spiritual aura.",
    "about_heritage_title": "A Living Heritage",
    "about_heritage_p": "Today, Shri Someshwara Temple is not just a place of worship but a living testament to the resilient heritage of coastal Karnataka. It continues to uphold ancient traditions, celebrate vibrant festivals like Maha Shivratri, and foster a sense of divine belonging among thousands of devotees who visit seeking peace and blessings.",
    
    "about_trad_title": "Spiritual Atmosphere",
    "about_trad_p": "Walking into the temple premises, one is greeted by the soothing sounds of Vedic chants and the scent of incense. The daily rituals follow centuries-old Agamic traditions, creating an environment where every corner tells a story of devotion, from the ancient stone carvings to the sacred bell's resonance.",

    "timings_note": "Note: Timings may change for festival days.",

    "sevas_title": "Sevas & Poojas",
    "sevas_th_slno": "Sl. No",
    "sevas_th_particulars": "Particulars",
    "seva_abhisheka": "Abhisheka",
    "seva_rudrabhisheka": "Rudrabhisheka",
    "seva_panchamrutha": "Panchamrutha",
    "seva_bilvarchane": "Bilvarchane",
    "contr_title": "Contribution Details",
    "contr_donation": "Donation",
    "contr_renovation": "Temple Renovation",
    "contr_other": "Other Contributions",
    "contr_general": "General Fund",

    // Gallery page
    "gallery_photo_title": "Photo Gallery",
    "gallery_videos_title": "Videos",
    "filter_photos": "Photos",
    "filter_videos": "Videos",
    "gallery_video1_title": "Temple Rituals & Darshan",
    "gallery_video1_desc": "Witness the divine rituals and peaceful atmosphere",
    "gallery_video2_title": "Gokarna Temple Highlights",
    "gallery_video2_desc": "Explore the sacred heritage and beauty of the temple",
    "gallery_video3_title": "Sacred Procession",
    "gallery_video3_desc": "Divine festival celebrations and processions",
    "filter_all": "All",
    "filter_temple": "Temple",
    "filter_festivals": "Festivals",
    "filter_deities": "Deities",

    // Donations page
    "donations_title": "Support the Temple",
    "donations_desc": "Your donations help maintain daily rituals and community services.",
    "donations_bank": "Bank:",
    "donations_bank_name": "State Bank of India",
    "donations_ifsc": "IFSC:",
    "donations_account": "Account:",
    "seva_pooja": "Daily Pooja",
    "seva_annadanam": "Annadanam",
    "seva_maintenance": "Maintenance",

    // Contact page
    "contact_title": "Contact & Location",
    "contact_landline_label": "Temple Landline:",
    "contact_bhat_label": "Bhat:",
    "contact_address_label": "Address:",
    "contact_address": "Shri Someshwara Temple, Hoskeri, Gokarna, Karnataka, India",

    // Gallery Page
    "gallery_title": "Photo Gallery",
    "gallery_intro_kn": "ದೇವರ ದರ್ಶನ",
    "gallery_intro_title": "Sacred Glimpses",
    "gallery_intro_desc": "A reverent collection of moments from the sacred grounds of Shri Someshwara Deva — the deity, the architecture, the festivals and the devoted.",
    "gallery_filter_all": "✦ All Photos",
    "gallery_filter_deity": "🕉 Deity",
    "gallery_filter_temple": "🛕 Temple",
    "gallery_filter_festivals": "🔥 Festivals",
    "gallery_filter_devotees": "🙏 Devotees",
    "gallery_showing": "Showing sacred moments…",
    "gallery_videos": "Videos",
    "gallery_chant_desc": "Sacred chanting from the temple",
    "gallery_watch_video": "▶ Watch Video",
    "gallery_festival_highlights": "Festival Highlights",
    "gallery_festival_desc": "Temple festival video — coming soon",
    "gallery_coming_soon": "▶ Coming Soon",

    // Footer
    "footer_temple_name": "Shri Someshwara Temple",
    "footer_location": "Hoskeri, Gokarna, Karnataka",
    "footer_desc": "Ancient temple dedicated to Lord Shiva, serving devotees with divine blessings.",
    "footer_quick_links": "Quick Links",
    "footer_contact_us": "Contact Us",
    "footer_connect": "Connect With Us",
    "footer_copyright": "© 2025 Shri Someshwara Temple Hoskeri. All Rights Reserved."
  },
  kn: {
    // Navigation
    "nav_home": "ಮುಖಪುಟ",
    "nav_about": "ಬಗ್ಗೆ",
    "nav_timings": "ಸಮಯ",
    "nav_gallery": "ಗ್ಯಾಲರಿ",
    "nav_committee": "ಸಮಿತಿ",
    "nav_donations": "ದೇಣಿಗೆ",
    "nav_contact": "ಸಂಪರ್ಕ",

    // Topbar
    "topbar_text": "|| ॐ ಶ್ರೀ ಸೋಮೇಶ್ವರ ಪ್ರಸನ್ನ ||",

    // Brand
    "brand_title": "ಶ್ರೀ ಸೋಮೇಶ್ವರ ದೇವಸ್ಥಾನ",
    "brand_subtitle": "ಹೊಸಕೇರಿ, ಗೋಕರ್ಣ",

    // Index - Hero
    "hero_title": "ಶ್ರೀ ಸೋಮೇಶ್ವರ ದೇವಸ್ಥಾನ ಹೊಸಕೇರಿ, ಗೋಕರ್ಣ",
    "hero_badge": "ದೇವಸ್ಥಾನದ ಬಗ್ಗೆ",

    // Index - Temple Highlights
    "highlights_title": "ದೇವಸ್ಥಾನದ ವಿಶೇಷತೆಗಳು",
    "hl1_title": "ಪ್ರಾಚೀನ ಪರಂಪರೆ",
    "hl1_desc": "ಗೋಕರ್ಣದ ಹೃದಯಭಾಗದಲ್ಲಿರುವ ಶತಮಾನಗಳ ಹಳೆಯ ಸಂಪ್ರದಾಯಗಳು ಮತ್ತು ವಾಸ್ತುಶಿಲ್ಪವನ್ನು ರಕ್ಷಿಸುವ ಐತಿಹಾಸಿಕ ಕ್ಷೇತ್ರ.",
    "hl2_title": "ದೈನಂದಿನ ಪೂಜೆಗಳು",
    "hl2_desc": "ನಿಯಮಿತ ಆಚರಣೆಗಳು, ಬೆಳಗಿನ ಆರತಿಗಳು ಮತ್ತು ಸಂಜೆಯ ಪ್ರಾರ್ಥನೆಗಳ ಮೂಲಕ ದೈವಿಕ ಶಾಂತಿಯನ್ನು ಅನುಭವಿಸಿ.",
    "hl3_title": "ಸಮುದಾಯ ಸೇವೆಗಳು",
    "hl3_desc": "ಅನ್ನದಾನ ಮತ್ತು ವಿಶೇಷ ಸಮುದಾಯ ಕಲ್ಯಾಣ ಕಾರ್ಯಕ್ರಮಗಳಂತಹ ಉದಾತ್ತ ಕಾರ್ಯಗಳಲ್ಲಿ ಭಾಗವಹಿಸಿ.",
    "hl4_title": "ಪವಿತ್ರ ಹಬ್ಬಗಳು",
    "hl4_desc": "ಮಹಾ ಶಿವರಾತ್ರಿ ಮತ್ತು ದೀಪೋತ್ಸವ ಸೇರಿದಂತೆ ರೋಮಾಂಚಕ ಆಚರಣೆಗಳು ಬಹಳ ಭಕ್ತಿಯಿಂದ ನಡೆಯುತ್ತವೆ.",

    // Index - Upcoming Festivals
    "festivals_title": "ಮುಂಬರುವ ಹಬ್ಬಗಳು",
    "fest1_name": "ಮಹಾ ಶಿವರಾತ್ರಿ",
    "fest1_date": "26 ಫೆಬ್ರವರಿ 2025",
    "fest1_desc": "ವಿಶೇಷ ಅಭಿಷೇಕಗಳು ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳೊಂದಿಗೆ ಶಿವನ ರಾತ್ರಿಯಿಡೀ ಆಚರಣೆ.",
    "fest2_name": "ಚೈತ್ರ ಪೂರ್ಣಿಮೆ",
    "fest2_date": "13 ಏಪ್ರಿಲ್ 2025",
    "fest2_desc": "ಶುಭ ಪೂರ್ಣಿಮೆಯ ದಿನದಂದು ವಿಶೇಷ ಪ್ರಾರ್ಥನೆಗಳು ಮತ್ತು ದೇವಸ್ಥಾನದ ರಥೋತ್ಸವ.",
    "fest3_name": "ವಸಂತ ಪಂಚಮಿ",
    "fest3_date": "02 ಫೆಬ್ರವರಿ 2025",
    "fest3_desc": "ವಿಶೇಷ ಹೂವಿನ ಅಲಂಕಾರಗಳು ಮತ್ತು ಪ್ರಾರ್ಥನೆಗಳೊಂದಿಗೆ ವಸಂತ ಕಾಲವನ್ನು ಸ್ವಾಗತಿಸುವುದು.",

    // Index - Devotee Experience
    "testimonials_title": "ಭಕ್ತರ ಅನುಭವ",
    "test1_text": "ಶ್ರೀ ಸೋಮೇಶ್ವರ ದೇವಸ್ಥಾನಕ್ಕೆ ಭೇಟಿ ನೀಡುವುದು ಒಂದು ಆಳವಾದ ಆಧ್ಯಾತ್ಮಿಕ ಅನುಭವ. ಇಲ್ಲಿನ ಶಾಂತಿ ಸಾಟಿಯಿಲ್ಲದ್ದು.",
    "test1_author": "ರಾಜೇಶ್ ಕುಮಾರ್",
    "test1_location": "ಬೆಂಗಳೂರು",
    "test2_text": "ದೇವಸ್ಥಾನದ ನಿರ್ವಹಣೆ ಮತ್ತು ಅರ್ಚಕರ ಭಕ್ತಿ ನಿಜಕ್ಕೂ ಸ್ಪೂರ್ತಿದಾಯಕವಾಗಿದೆ. ಗೋಕರ್ಣದಲ್ಲಿದ್ದಾಗ ಖಂಡಿತ ಭೇಟಿ ನೀಡಿ.",
    "test2_author": "ಸುಮನ್ ಹೆಗ್ಡೆ",
    "test2_location": "ಶಿರಸಿ",
    "test3_text": "ಸಂಜೆಯ ಆರತಿಯಲ್ಲಿ ಭಾಗವಹಿಸುವುದು ನನಗೆ ತುಂಬಾ ಶಾಂತಿ ನೀಡಿತು. ಸುಂದರವಾದ ಮತ್ತು ಚೆನ್ನಾಗಿ ನಿರ್ವಹಿಸಲ್ಪಟ್ಟ ದೇವಸ್ಥಾನ.",
    "test3_author": "ಅಂಜಲಿ ಶರ್ಮಾ",
    "test3_location": "ಮುಂಬೈ",

    // Index - How to Reach
    "reach_title": "ತಲುಪುವುದು ಹೇಗೆ",
    "reach_road_title": "ರಸ್ತೆಯ ಮೂಲಕ",
    "reach_road_desc": "ಕೆಎಸ್ಆರ್ಟಿಸಿ ಮತ್ತು ಖಾಸಗಿ ಬಸ್‌ಗಳ ಮೂಲಕ ಉತ್ತಮ ಸಂಪರ್ಕವಿದೆ. ಗೋಕರ್ಣ ಬಸ್ ನಿಲ್ದಾಣದಿಂದ ೧೦ ನಿಮಿಷಗಳ ಪ್ರಯಾಣ.",
    "reach_train_title": "ರೈಲಿನ ಮೂಲಕ",
    "reach_train_desc": "ಗೋಕರ್ಣ ರೋಡ್ ಸ್ಟೇಷನ್ ಹತ್ತಿರದ ನಿಲ್ದಾಣವಾಗಿದೆ (೧೫ ನಿಮಿಷ ದೂರ). ಆಟೋ-ರಿಕ್ಷಾಗಳು ಲಭ್ಯವಿವೆ.",
    "reach_air_title": "ವಿಮಾನದ ಮೂಲಕ",
    "reach_air_desc": "ದಾಬೋಲಿಂ ವಿಮಾನ ನಿಲ್ದಾಣ (ಗೋವಾ) ಸುಮಾರು ೧೪೦ ಕಿಮೀ ದೂರದಲ್ಲಿದೆ. ಟ್ಯಾಕ್ಸಿಗಳು ಲಭ್ಯವಿವೆ.",

    // Index - Rituals Card
    "rituals_title": "ದೈನಂದಿನ ಕಿರುನೋಟ",
    "rituals_darshan": "ದರ್ಶನ ಸಮಯ:",
    "rituals_darshan_time": "ಬೆಳಿಗ್ಗೆ ೭ - ರಾತ್ರಿ ೮",
    "rituals_festivals": "ಹಬ್ಬಗಳು:",
    "rituals_festivals_list": "ಮಕರ ಸಂಕ್ರಾಂತಿ, ಮಹಾ ಶಿವರಾತ್ರಿ, ಚೈತ್ರ ಪೂರ್ಣಿಮೆ, ಗಣೇಶ ಚತುರ್ಥಿ",
    "rituals_desc": "ಬೆಳಿಗ್ಗೆ ಮತ್ತು ಸಂಜೆ ಆರತಿ, ಭಜನೆ ಮತ್ತು ನಿಯಮಿತ ಪೂಜೆಗಳು.",

    // Index - Temple Schedule (New)
    "schedule_title": "ದೇವಸ್ಥಾನದ ಸಮಯ",
    "schedule_desc": "ದೈನಂದಿನ ಪೂಜೆ ಮತ್ತು ದರ್ಶನಕ್ಕೆ ನಮ್ಮೊಂದಿಗೆ ಸೇರಿ. ಈ ಸಮಯದಲ್ಲಿ ಎಲ್ಲಾ ಭಕ್ತರಿಗೆ ದೇವಸ್ಥಾನ ತೆರೆದಿರುತ್ತದೆ.",
    "sched_morning_title": "ಬೆಳಗ್ಗಿನ ದರ್ಶನ ಮತ್ತು ಪೂಜೆ",
    "sched_morning_time": "ಬೆಳಗ್ಗೆ 06:00 - ಮಧ್ಯಾಹ್ನ 12:30",
    "sched_morning_desc": "ಸುಪ್ರಭಾತ, ಅಭಿಷೇಕ ಮತ್ತು ಮಹಾ ಪೂಜೆ ಒಳಗೊಂಡಿದೆ.",
    "sched_evening_title": "ಸಂಜೆಯ ದರ್ಶನ ಮತ್ತು ಆರತಿ",
    "sched_evening_time": "ಸಂಜೆ 04:30 - ರಾತ್ರಿ 08:30",
    "sched_evening_desc": "ಸಂಧ್ಯಾ ಆರತಿ, ಭಜನೆ ಮತ್ತು ರಾತ್ರಿ ಪೂಜೆ ಒಳಗೊಂಡಿದೆ.",

    // Index - Festivals & Celebrations (New)
    "fest_celeb_title": "ಹಬ್ಬಗಳು ಮತ್ತು ಆಚರಣೆಗಳು",
    "fest_celeb_desc": "ದೇವಸ್ಥಾನವು ಪ್ರತಿ ವರ್ಷ ಹಲವಾರು ಪ್ರಮುಖ ಹಬ್ಬಗಳನ್ನು ಬಹಳ ವಿಜೃಂಭಣೆಯಿಂದ ಮತ್ತು ಸಮುದಾಯದ ಭಾಗವಹಿಸುವಿಕೆಯೊಂದಿಗೆ ಆಚರಿಸುತ್ತದೆ:",
    "fest_shivratri_title": "ಮಹಾ ಶಿವರಾತ್ರಿ",
    "fest_shivratri_desc": "ಅಭಿಷೇಕ, ರುದ್ರಾಭಿಷೇಕ ಮತ್ತು ಭಜನೆಗಳೊಂದಿಗೆ ರಾತ್ರಿಯಿಡೀ ಜಾಗರಣೆ",
    "fest_chaitra_title": "ಚೈತ್ರ ಪೂರ್ಣಿಮೆ",
    "fest_chaitra_desc": "ವಾರ್ಷಿಕ ಸಮುದಾಯ ಔತಣಕೂಟ ಮತ್ತು ವಿಶೇಷ ಮೆರವಣಿಗೆ",
    "fest_ganesh_title": "ಗಣೇಶ ಚತುರ್ಥಿ",
    "fest_ganesh_desc": "ಗಣೇಶ ಪೂಜೆ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು",
    "fest_makar_title": "ಮಕರ ಸಂಕ್ರಾಂತಿ",
    "fest_makar_desc": "ಎಳ್ಳು-ಬೆಲ್ಲ ವಿತರಣೆ ಮತ್ತು ವಿಶೇಷ ಪೂಜೆಗಳು",
    "fest_naga_title": "ನಾಗ ಪಂಚಮಿ",
    "fest_naga_desc": "ಹಾಲಿನ ಅಭಿಷೇಕದೊಂದಿಗೆ ನಾಗದೇವರ ಆರಾಧನೆ",
    "fest_ugadi_title": "ಯುಗಾದಿ",
    "fest_ugadi_desc": "ಕನ್ನಡ ಮತ್ತು ತುಳು ಹೊಸ ವರ್ಷದ ಆಚರಣೆಗಳು",

    // Committee Page
    "committee_banner_title": "ದೇವಸ್ಥಾನ ಸಮಿತಿ",
    "committee_banner_subtitle": "ಸಮರ್ಪಿತ ಟ್ರಸ್ಟ್ ಸದಸ್ಯರು",
    "committee_section_title": "ಧರ್ಮದರ್ಶಿ ಮಂಡಳಿ",
    "member_role_president": "ಅಧ್ಯಕ್ಷರು",
    "member_role_secretary": "ಕಾರ್ಯದರ್ಶಿ",
    "member_role_treasurer": "ಖಜಾಂಚಿ",
    "member_role_member": "ಟ್ರಸ್ಟ್ ಸದಸ್ಯರು",

    "member_1_name": "ಶ್ರೀ ರಾಮಚಂದ್ರ ಭಟ್",
    "member_1_role": "ಅಧ್ಯಕ್ಷರು",
    "member_1_phone": "+91 98450 12341",
    "member_1_email": "r.bhat@example.com",
    "member_2_name": "ಶ್ರೀ ಮಹಾಬಲೇಶ್ವರ ಹೆಗಡೆ",
    "member_2_role": "ಕಾರ್ಯದರ್ಶಿ",
    "member_2_phone": "+91 98450 12342",
    "member_2_email": "m.hegde@example.com",
    "member_3_name": "ಶ್ರೀ ಗಣಪತಿ ನಾಯ್ಕ್",
    "member_3_role": "ಖಜಾಂಚಿ",
    "member_3_phone": "+91 98450 12343",
    "member_3_email": "g.naik@example.com",
    "member_4_name": "ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ಭಟ್",
    "member_4_role": "ಟ್ರಸ್ಟ್ ಸದಸ್ಯರು",
    "member_4_phone": "+91 98450 12344",
    "member_4_email": "s.bhat@example.com",
    "member_5_name": "ಶ್ರೀ ವೆಂಕಟೇಶ್ ಪ್ರಭು",
    "member_5_role": "ಟ್ರಸ್ಟ್ ಸದಸ್ಯರು",
    "member_5_phone": "+91 98450 12345",
    "member_5_email": "v.prabhu@example.com",
    "member_6_name": "ಶ್ರೀ ಕೃಷ್ಣ ಮೂರ್ತಿ",
    "member_6_role": "ಟ್ರಸ್ಟ್ ಸದಸ್ಯರು",
    "member_6_phone": "+91 98450 12346",
    "member_6_email": "k.murthy@example.com",
    "member_7_name": "ಶ್ರೀ ಮಂಜುನಾಥ ಗೌಡ",
    "member_7_role": "ಟ್ರಸ್ಟ್ ಸದಸ್ಯರು",
    "member_7_phone": "+91 98450 12347",
    "member_7_email": "m.gouda@example.com",
    "member_8_name": "ಶ್ರೀ ಶಂಕರ ನಾರಾಯಣ",
    "member_8_role": "ಟ್ರಸ್ಟ್ ಸದಸ್ಯರು",
    "member_8_phone": "+91 98450 12348",
    "member_8_email": "s.narayan@example.com",
    "member_9_name": "ಶ್ರೀ ರಾಘವೇಂದ್ರ ರಾವ್",
    "member_9_role": "ಟ್ರಸ್ಟ್ ಸದಸ್ಯರು",
    "member_9_phone": "+91 98450 12349",
    "member_9_email": "r.rao@example.com",
    "member_10_name": "ಶ್ರೀ ದತ್ತಾತ್ರೇಯ ಭಟ್",
    "member_10_role": "ಟ್ರಸ್ಟ್ ಸದಸ್ಯರು",
    "member_10_phone": "+91 98450 12350",
    "member_10_email": "d.bhat@example.com",
    "member_11_name": "ಶ್ರೀ ಈಶ್ವರ್ ನಾಯ್ಕ್",
    "member_11_role": "ಟ್ರಸ್ಟ್ ಸದಸ್ಯರು",
    "member_11_phone": "+91 98450 12351",
    "member_11_email": "i.naik@example.com",
    "member_12_name": "ಶ್ರೀ ನಾರಾಯಣ ಹೆಗಡೆ",
    "member_12_role": "ಟ್ರಸ್ಟ್ ಸದಸ್ಯರು",
    "member_12_phone": "+91 98450 12352",
    "member_12_email": "n.hegde@example.com",
    "member_13_name": "ಶ್ರೀ ವಾಸುದೇವ ಪ್ರಭು",
    "member_13_role": "ಟ್ರಸ್ಟ್ ಸದಸ್ಯರು",
    "member_13_phone": "+91 98450 12353",
    "member_13_email": "v.prabhu2@example.com",
    "member_14_name": "ಶ್ರೀ ರಮೇಶ್ ನಾಯ್ಕ್",
    "member_14_role": "ಟ್ರಸ್ಟ್ ಸದಸ್ಯರು",
    "member_14_phone": "+91 98450 12354",
    "member_14_email": "r.naik@example.com",
    "member_15_name": "ಶ್ರೀ ಸುರೇಶ್ ಭಟ್",
    "member_15_role": "ಟ್ರಸ್ಟ್ ಸದಸ್ಯರು",
    "member_15_phone": "+91 98450 12355",
    "member_15_email": "s.bhat2@example.com",

    // Index - Gallery Preview
    "gallery_preview_title": "ಗ್ಯಾಲರಿ ಮುನ್ನೋಟ",

    // Index - Announcements
    "announcements_title": "ದೇವಸ್ಥಾನದ ಪ್ರಕಟಣೆಗಳು",
    "ann1_date": "ಜನವರಿ 15, 2025",
    "ann1_title": "ಮಹಾ ಶಿವರಾತ್ರಿ ಆಚರಣೆ",
    "ann1_desc": "ಮಹಾ ಶಿವರಾತ್ರಿ ಉತ್ಸವಕ್ಕೆ ಸೇರಿ. ವಿಶೇಷ ಅಭಿಷೇಕ ಮತ್ತು ರಾತ್ರಿಯಿಡೀ ಭಜನೆ. ಎಲ್ಲಾ ಭಕ್ತರಿಗೆ ಪ್ರಸಾದ ವಿತರಣೆ.",
    "ann1_badge": "ಮಹತ್ವದ",
    "ann2_date": "ಜನವರಿ 10, 2025",
    "ann2_title": "ವಿಶೇಷ ಪೂಜೆ ಸಮಯ",
    "ann2_desc": "ಮುಂಬರುವ ಹಬ್ಬದ ಋತುವಿಗೆ ನವೀಕರಿಸಿದ ಸಮಯ. ಬೆಳಿಗ್ಗೆ ಪೂಜೆ 5:30 ಕ್ಕೆ ಆರಂಭ.",
    "ann2_badge": "ಕಾರ್ಯಕ್ರಮ",
    "ann3_date": "ಜನವರಿ 5, 2025",
    "ann3_title": "ಅನ್ನದಾನ ಕಾರ್ಯಕ್ರಮ",
    "ann3_desc": "ಈ ತಿಂಗಳಿನಿಂದ ದೈನಂದಿನ ಅನ್ನದಾನ ಕಾರ್ಯಕ್ರಮ. ಸ್ವಯಂಸೇವಕರು ಮತ್ತು ಪ್ರಾಯೋಜಕರನ್ನು ಹುಡುಕಲಾಗುತ್ತಿದೆ.",
    "ann3_badge": "ಸಾಮಾನ್ಯ",

    // About page (Redesigned)
    "about_banner_title": "ದೇವಸ್ಥಾನದ ಬಗ್ಗೆ",
    "about_banner_subtitle": "ಇತಿಹಾಸ ಮತ್ತು ಪರಂಪರೆ",
    "about_main_title": "ಶ್ರೀ ಸೋಮೇಶ್ವರ ದೇವಸ್ಥಾನ: ಉಗಮ ಮತ್ತು ಪರಂಪರೆ",
    "about_origins_title": "ದೈವಿಕ ಅಡಿಪಾಯ",
    "about_p1": "ಗೋಕರ್ಣದ ಹೊಸಕೇರಿಯಲ್ಲಿರುವ ಶ್ರೀ ಸೋಮೇಶ್ವರ ದೇವಸ್ಥಾನವು ಶಿವನಿಗೆ ಸಮರ್ಪಿತವಾದ ಪವಿತ್ರ ಕ್ಷೇತ್ರವಾಗಿದೆ. ಇಲ್ಲಿ ಶಿವನು ಸೋಮೇಶ್ವರನಾಗಿ (ಚಂದ್ರನ ಒಡೆಯ) ನೆಲೆಸಿದ್ದಾನೆ. ಈ ಪುರಾತನ ಸ್ಥಳವು ಶತಮಾನಗಳಿಂದ ಆಧ್ಯಾತ್ಮಿಕ ಸಾಂತ್ವನ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ನಿರಂತರತೆಯ ದಾರಿದೀಪವಾಗಿ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿದೆ, ಇದು ಗೋಕರ್ಣದ ಪವಿತ್ರ ಭೂಗೋಳದೊಂದಿಗೆ ಆಳವಾಗಿ ಬೆಸೆದುಕೊಂಡಿದೆ.",
    "about_p2": "ಸ್ಥಳೀಯ ಮೌಖಿಕ ಸಂಪ್ರದಾಯಗಳ ಪ್ರಕಾರ, ಹೊಸಕೇರಿ ಪ್ರದೇಶದ ಆರಂಭಿಕ ವಾಸಿಗಳು 'ಸ್ವಯಂಭೂ' ಲಿಂಗವನ್ನು ಪತ್ತೆಹಚ್ಚುವುದರೊಂದಿಗೆ ದೇವಸ್ಥಾನದ ಉಗಮವು ಬೇರೂರಿದೆ. ಪ್ರಾಚೀನ ಋಷಿಗಳು ಇಲ್ಲಿ ತೀವ್ರ ತಪಸ್ಸು ಮಾಡಿದ್ದರು ಎಂದು ಹೇಳಲಾಗುತ್ತದೆ, ಇದು ಈ ಭೂಮಿಯನ್ನು ಪವಿತ್ರಗೊಳಿಸಿತು ಮತ್ತು ವೈದಿಕ ಆಚರಣೆಗಳು ಹಾಗೂ ಸ್ಥಳೀಯ ಜಾನಪದ ಸಂಪ್ರದಾಯಗಳು ಸಾಮರಸ್ಯದಿಂದ ಸಹಬಾಳ್ವೆ ನಡೆಸುವ ಕೇಂದ್ರಬಿಂದುವಾಗಿ ದೇವಸ್ಥಾನವನ್ನು ಸ್ಥಾಪಿಸಿತು.",
    "about_p3": "ದೇವಸ್ಥಾನದ ವಾಸ್ತುಶಿಲ್ಪವು ಸಾಂಪ್ರದಾಯಿಕ ಕರಾವಳಿ ದ್ರಾವಿಡ ಶೈಲಿಯನ್ನು ಹೊಂದಿದ್ದು, ಹಿಂದಿನ ತಲೆಮಾರುಗಳ ಕುಶಲತೆ ಮತ್ತು ಭಕ್ತಿಯನ್ನು ಸಾರುತ್ತದೆ. ಸ್ಥಳೀಯ ಕುಟುಂಬಗಳ ಪ್ರೋತ್ಸಾಹ ಮತ್ತು ಸಮುದಾಯದ ಅಚಲ ನಂಬಿಕೆಯ ಮೂಲಕ, ದೇವಸ್ಥಾನವು ಸಣ್ಣ ಅರಣ್ಯ ಮಂದಿರದಿಂದ ಇಂದು ಕಾಣುವ ಭವ್ಯವಾದ ರಚನೆಯಾಗಿ ವಿಕಸನಗೊಂಡಿದೆ, ತನ್ನ ನೈಸರ್ಗಿಕ ಆಧ್ಯಾತ್ಮಿಕ ಪ್ರಭೆಯನ್ನು ಉಳಿಸಿಕೊಂಡಿದೆ.",
    "about_heritage_title": "ಜೀವಂತ ಪರಂಪರೆ",
    "about_heritage_p": "ಇಂದು, ಶ್ರೀ ಸೋಮೇಶ್ವರ ದೇವಸ್ಥಾನವು ಕೇವಲ ಪೂಜಾ ಸ್ಥಳವಲ್ಲ ಆದರೆ ಕರಾವಳಿ ಕರ್ನಾಟಕದ ಸ್ಥಿತಿಸ್ಥಾಪಕ ಪರಂಪರೆಯ ಜೀವಂತ ಪುರಾವೆಯಾಗಿದೆ. ಇದು ಪ್ರಾಚೀನ ಸಂಪ್ರದಾಯಗಳನ್ನು ಎತ್ತಿಹಿಡಿಯುವುದನ್ನು ಮುಂದುವರಿಸುತ್ತದೆ, ಮಹಾ ಶಿವರಾತ್ರಿಯಂತಹ ರೋಮಾಂಚಕ ಹಬ್ಬಗಳನ್ನು ಆಚರಿಸುತ್ತದೆ ಮತ್ತು ಶಾಂತಿ ಮತ್ತು ಆಶೀರ್ವಾದವನ್ನು ಹುಡುಕುವ ಸಾವಿರಾರು ಭಕ್ತರಲ್ಲಿ ದೈವಿಕ ಬಾಂಧವ್ಯವನ್ನು ಬೆಳೆಸುತ್ತದೆ.",

    "about_trad_title": "ಆಧ್ಯಾತ್ಮಿಕ ವಾತಾವರಣ",
    "about_trad_p": "ದೇವಸ್ಥಾನದ ಆವರಣಕ್ಕೆ ಕಾಲಿಡುತ್ತಿದ್ದಂತೆ, ವೈದಿಕ ಮಂತ್ರಗಳ ಹಿತವಾದ ಶಬ್ದಗಳು ಮತ್ತು ಧೂಪದ್ರವ್ಯದ ಸುಗಂಧವು ಸ್ವಾಗತಿಸುತ್ತದೆ. ದೈನಂದಿನ ಆಚರಣೆಗಳು ಶತಮಾನಗಳಷ್ಟು ಹಳೆಯದಾದ ಆಗಮಿಕ ಸಂಪ್ರದಾಯಗಳನ್ನು ಅನುಸರಿಸುತ್ತವೆ, ಪುರಾತನ ಕಲ್ಲಿನ ಕೆತ್ತನೆಗಳಿಂದ ಹಿಡಿದು ಪವಿತ್ರ ಘಂಟಾನಾದದವರೆಗೆ ಪ್ರತಿಯೊಂದು ಮೂಲೆಯೂ ಭಕ್ತಿಯ ಕಥೆಯನ್ನು ಹೇಳುವ ವಾತಾವರಣವನ್ನು ಸೃಷ್ಟಿಸುತ್ತದೆ.",

    "timings_note": "ಸೂಚನೆ: ಹಬ್ಬದ ದಿನಗಳಲ್ಲಿ ಸಮಯ ಬದಲಾಗಬಹುದು.",

    "sevas_title": "ಸೇವೆಗಳು ಮತ್ತು ಪೂಜೆಗಳು",
    "sevas_th_slno": "ಕ್ರಮ ಸಂಖ್ಯೆ",
    "sevas_th_particulars": "ವಿವರಗಳು",
    "seva_abhisheka": "ಅಭಿಷೇಕ",
    "seva_rudrabhisheka": "ರುದ್ರಾಭಿಷೇಕ",
    "seva_panchamrutha": "ಪಂಚಾಮೃತ",
    "seva_bilvarchane": "ಬಿಲ್ವಾರ್ಚನೆ",
    "contr_title": "ದೇಣಿಗೆ ವಿವರಗಳು",
    "contr_donation": "ದೇಣಿಗೆ",
    "contr_renovation": "ದೇವಸ್ಥಾನ ನವೀಕರಣ",
    "contr_other": "ಇತರೆ ದೇಣಿಗೆಗಳು",
    "contr_general": "ಸಾಮಾನ್ಯ ನಿಧಿ",

    // Gallery page
    "gallery_photo_title": "ಫೋಟೋ ಗ್ಯಾಲರಿ",
    "gallery_videos_title": "ವೀಡಿಯೊಗಳು",
    "filter_photos": "ಫೋಟೋಗಳು",
    "filter_videos": "ವೀಡಿಯೊಗಳು",
    "gallery_video1_title": "ದೇವಸ್ಥಾನದ ಆಚರಣೆಗಳು ಮತ್ತು ದರ್ಶನ",
    "gallery_video1_desc": "ದೈವಿಕ ಆಚರಣೆಗಳು ಮತ್ತು ಶಾಂತಿಯುತ ವಾತಾವರಣಕ್ಕೆ ಸಾಕ್ಷಿಯಾಗಿ",
    "gallery_video2_title": "ಗೋಕರ್ಣ ದೇವಸ್ಥಾನದ ಪ್ರಮುಖ ಅಂಶಗಳು",
    "gallery_video2_desc": "ದೇವಸ್ಥಾನದ ಪವಿತ್ರ ಪರಂಪರೆ ಮತ್ತು ಸೌಂದರ್ಯವನ್ನು ಅನ್ವೇಷಿಸಿ",
    "gallery_video3_title": "ಪವಿತ್ರ ಮೆರವಣಿಗೆ",
    "gallery_video3_desc": "ದೈವಿಕ ಹಬ್ಬದ ಆಚರಣೆಗಳು ಮತ್ತು ಮೆರವಣಿಗೆಗಳು",
    "filter_all": "ಎಲ್ಲ",
    "filter_temple": "ದೇವಸ್ಥಾನ",
    "filter_festivals": "ಹಬ್ಬಗಳು",
    "filter_deities": "ದೇವತೆಗಳು",

    // Donations page
    "donations_title": "ದೇವಸ್ಥಾನಕ್ಕೆ ಬೆಂಬಲ",
    "donations_desc": "ನಿಮ್ಮ ದೇಣಿಗೆಯು ದೈನಂದಿನ ಪೂಜೆ ಮತ್ತು ಸಮುದಾಯ ಸೇವೆಗಳನ್ನು ನಿರ್ವಹಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    "donations_bank": "ಬ್ಯಾಂಕ್:",
    "donations_bank_name": "ಸ್ಟೇಟ್ ಬ್ಯಾಂಕ್ ಆಫ್ ಇಂಡಿಯಾ",
    "donations_ifsc": "ಐಎಫ್‌ಎಸ್‌ಸಿ:",
    "donations_account": "ಖಾತೆ:",
    "seva_pooja": "ದೈನಂದಿನ ಪೂಜೆ",
    "seva_annadanam": "ಅನ್ನದಾನ",
    "seva_maintenance": "ನಿರ್ವಹಣೆ",

    // Contact page
    "contact_title": "ಸಂಪರ್ಕ ಮತ್ತು ಸ್ಥಳ",
    "contact_landline_label": "ದೇವಸ್ಥಾನ ದೂರವಾಣಿ:",
    "contact_bhat_label": "ಭಟ್ಟರು:",
    "contact_address_label": "ವಿಳಾಸ:",
    "contact_address": "ಶ್ರೀ ಸೋಮೇಶ್ವರ ದೇವಸ್ಥಾನ, ಹೊಸಕೇರಿ, ಗೋಕರ್ಣ, ಕರ್ನಾಟಕ, ಭಾರತ",

    // Gallery Page
    "gallery_title": "ಛಾಯಾಚಿತ್ರ ಗ್ಯಾಲರಿ",
    "gallery_intro_kn": "ದೇವರ ದರ್ಶನ",
    "gallery_intro_title": "ಪವಿತ್ರ ದೃಶ್ಯಗಳು",
    "gallery_intro_desc": "ಶ್ರೀ ಸೋಮೇಶ್ವರ ದೇವ ದೇವಸ್ಥಾನದ ಪವಿತ್ರ ಕ್ಷೇತ್ರದಿಂದ ಭಕ್ತಿಪೂರ್ಣ ದೃಶ್ಯಗಳ ಸಂಗ್ರಹ — ದೇವರು, ದೇವಾಲಯದ ವಾಸ್ತುಶಿಲ್ಪ, ಹಬ್ಬಗಳು ಮತ್ತು ಭಕ್ತರು.",
    "gallery_filter_all": "✦ ಎಲ್ಲ ಚಿತ್ರಗಳು",
    "gallery_filter_deity": "🕉 ದೇವರು",
    "gallery_filter_temple": "🛕 ದೇವಾಲಯ",
    "gallery_filter_festivals": "🔥 ಹಬ್ಬಗಳು",
    "gallery_filter_devotees": "🙏 ಭಕ್ತರು",
    "gallery_showing": "ಪವಿತ್ರ ಪಲ್ಲಗಳು ತೋರಿಸಲಾಗುತ್ತಿದೆ…",
    "gallery_videos": "ವಿಡಿಯೋಗಳು",
    "gallery_chant_desc": "ದೇವಾಲಯದಿಂದ ಪವಿತ್ರ ಮಂತ್ರೋಚ್ಛಾರ",
    "gallery_watch_video": "▶ ವೀಡಿಯೋ ನೋಡಿ",
    "gallery_festival_highlights": "ಹಬ್ಬದ ವಿಶೇಷ ದೃಶ್ಯಗಳು",
    "gallery_festival_desc": "ದೇವಾಲಯ ಹಬ್ಬದ ವೀಡಿಯೋ — ಶೀಘ್ರದಲ್ಲಿ",
    "gallery_coming_soon": "▶ ಶೀಘ್ರದಲ್ಲಿ",

    // Footer
    "footer_temple_name": "ಶ್ರೀ ಸೋಮೇಶ್ವರ ದೇವಸ್ಥಾನ",
    "footer_location": "ಹೊಸಕೇರಿ, ಗೋಕರ್ಣ, ಕರ್ನಾಟಕ",
    "footer_desc": "ಶಿವನಿಗೆ ಸಮರ್ಪಿತ ಪ್ರಾಚೀನ ದೇವಸ್ಥಾನ, ದೈವಿಕ ಆಶೀರ್ವಾದದೊಂದಿಗೆ ಭಕ್ತರಿಗೆ ಸೇವೆ.",
    "footer_quick_links": "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು",
    "footer_contact_us": "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
    "footer_connect": "ನಮ್ಮೊಂದಿಗೆ ಸಂಪರ್ಕ",
    "footer_copyright": "© 2025 ಶ್ರೀ ಸೋಮೇಶ್ವರ ದೇವಸ್ಥಾನ ಹೊಸಕೇರಿ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ."
  },
  hi: {
    // Navigation
    "nav_home": "होम",
    "nav_about": "बारे में",
    "nav_timings": "समय",
    "nav_gallery": "गैलरी",
    "nav_committee": "समिति",
    "nav_donations": "दान",
    "nav_contact": "संपर्क",

    // Topbar
    "topbar_text": "|| ॐ श्री सोमेश्वर प्रसन्न ||",

    // Brand
    "brand_title": "श्री सोमेश्वर मंदिर",
    "brand_subtitle": "होसकेरी, गोकर्ण",

    // Index - Hero
    "hero_title": "श्री सोमेश्वर मंदिर होसकेरी, गोकर्ण",
    "hero_badge": "मंदिर के बारे में",

    // Index - Temple Highlights
    "highlights_title": "मंदिर की विशेषताएं",
    "hl1_title": "प्राचीन विरासत",
    "hl1_desc": "गोकर्ण के हृदय में स्थित, सदियों पुरानी परंपराओं और वास्तुकला को संजोए हुए एक ऐतिहासिक तीर्थ।",
    "hl2_title": "दैनिक पूजा",
    "hl2_desc": "नियमित अनुष्ठानों, सुबह की आरती और शाम की प्रार्थना के माध्यम से दिव्य शांति का अनुभव करें।",
    "hl3_title": "सामुदायिक सेवा",
    "hl3_desc": "अन्नदानम और विशेष सामुदायिक कल्याण कार्यक्रमों जैसे नेक कार्यों में भाग लें।",
    "hl4_title": "पवित्र त्यौहार",
    "hl4_desc": "महाशिवरात्रि और दीपोत्सव जैसे जीवंत उत्सव बड़े ही भक्ति भाव से मनाए जाते हैं।",

    // Index - Upcoming Festivals
    "festivals_title": "आगामी त्यौहार",
    "fest1_name": "महा शिवरात्रि",
    "fest1_date": "26 फरवरी 2025",
    "fest1_desc": "विशेष अभिषेक और सांस्कृतिक कार्यक्रमों के साथ भगवान शिव का रात भर चलने वाला उत्सव।",
    "fest2_name": "चैत्र पूर्णिमा",
    "fest2_date": "13 अप्रैल 2025",
    "fest2_desc": "शुभ पूर्णिमा के दिन विशेष प्रार्थना और मंदिर रथ उत्सव।",
    "fest3_name": "वसंत पंचमी",
    "fest3_date": "02 फरवरी 2025",
    "fest3_desc": "विशेष पुष्प सजावट और प्रार्थनाओं के साथ वसंत ऋतु का स्वागत।",

    // Index - Devotee Experience
    "testimonials_title": "भक्तों के अनुभव",
    "test1_text": "श्री सोमेश्वर मंदिर की यात्रा एक गहरा आध्यात्मिक अनुभव है। यहाँ की शांति बेमिसाल है।",
    "test1_author": "राजेश कुमार",
    "test1_location": "बेंगलुरु",
    "test2_text": "मंदिर का प्रबंधन और पुजारियों की भक्ति वास्तव में प्रेरणादायक है। गोकर्ण में होने पर यहाँ अवश्य आएं।",
    "test2_author": "सुमन हेगड़े",
    "test2_location": "सिरसी",
    "test3_text": "शाम की आरती में शामिल होने से मुझे बहुत शांति मिली। एक सुंदर और अच्छी तरह से प्रबंधित मंदिर।",
    "test3_author": "अंजलि शर्मा",
    "test3_location": "मुंबई",

    // Index - How to Reach
    "reach_title": "कैसे पहुँचें",
    "reach_road_title": "सड़क मार्ग",
    "reach_road_desc": "KSRTC और निजी बसों द्वारा अच्छी तरह से जुड़ा हुआ है। गोकर्ण बस स्टैंड से १० मिनट की दूरी।",
    "reach_train_title": "रेल मार्ग",
    "reach_train_desc": "गोकर्ण रोड स्टेशन निकटतम पड़ाव है (१५ मिनट दूर)। ऑटो-रिक्शा आसानी से उपलब्ध हैं।",
    "reach_air_title": "हवाई मार्ग",
    "reach_air_desc": "डाबोलिम हवाई अड्डा (गोवा) लगभग १४० किमी दूर है। सुंदर यात्रा के लिए टैक्सी उपलब्ध हैं।",

    // Index - Rituals Card
    "rituals_title": "दैनिक झलक",
    "rituals_darshan": "दर्शन का समय:",
    "rituals_darshan_time": "सुबह ७ - रात ೮",
    "rituals_festivals": "त्यौहार:",
    "rituals_festivals_list": "मकर संक्रांति, महा शिवरात्रि, चैत्र पूर्णिमा, गणेश चतुर्थी",
    "rituals_desc": "सुबह और शाम की आरती, भजन और नियमित पूजाएँ।",

    // Index - Temple Schedule (New)
    "schedule_title": "मंदिर का समय",
    "schedule_desc": "दैनिक पूजा और दर्शन के लिए हमसे जुड़ें। मंदिर इन घंटों के दौरान सभी भक्तों के लिए खुला है।",
    "sched_morning_title": "सुबह दर्शन और पूजा",
    "sched_morning_time": "सुबह 06:00 - दोपहर 12:30",
    "sched_morning_desc": "इसमें सुप्रभातम, अभिषेक और महा पूजा शामिल हैं।",
    "sched_evening_title": "शाम का दर्शन और आरती",
    "sched_evening_time": "शाम 04:30 - रात 08:30",
    "sched_evening_desc": "इसमें संध्या आरती, भजन और रात्रि पूजा शामिल हैं।",

    // Index - Festivals & Celebrations (New)
    "fest_celeb_title": "त्यौहार और समारोह",
    "fest_celeb_desc": "मंदिर हर साल महान भव्यता और सामुदायिक भागीदारी के साथ कई प्रमुख त्यौहार मनाता है:",
    "fest_shivratri_title": "महा शिवरात्रि",
    "fest_shivratri_desc": "अभिषेक, रुद्राभिषेक और भजनों के साथ रात भर का जागरण",
    "fest_chaitra_title": "चैत्र पूर्णिमा",
    "fest_chaitra_desc": "वार्षिक सामुदायिक भोज और विशेष जुलूस",
    "fest_ganesh_title": "गणेश चतुर्थी",
    "fest_ganesh_desc": "गणेश पूजा और सांस्कृतिक कार्यक्रम",
    "fest_makar_title": "मकर संक्रांति",
    "fest_makar_desc": "तिल-गुड़ वितरण और विशेष पूजा",
    "fest_naga_title": "नाग पंचमी",
    "fest_naga_desc": "दूध अभिषेक के साथ नाग देवता की पूजा",
    "fest_ugadi_title": "उगादि",
    "fest_ugadi_desc": "कन्नड़ और तुलु नव वर्ष समारोह",

    // Committee Page
    "committee_banner_title": "मंदिर समिति",
    "committee_banner_subtitle": "समर्पित ट्रस्ट सदस्य",
    "committee_section_title": "ट्रस्टी बोर्ड",
    "member_role_president": "अध्यक्ष",
    "member_role_secretary": "सचिव",
    "member_role_treasurer": "कोषाध्यक्ष",
    "member_role_member": "ट्रस्ट सदस्य",

    "member_1_name": "श्री रामचंद्र भट्ट",
    "member_1_role": "अध्यक्ष",
    "member_1_phone": "+91 98450 12341",
    "member_1_email": "r.bhat@example.com",
    "member_2_name": "श्री महाबलेश्वर हेगड़े",
    "member_2_role": "सचिव",
    "member_2_phone": "+91 98450 12342",
    "member_2_email": "m.hegde@example.com",
    "member_3_name": "श्री गणपति नायक",
    "member_3_role": "कोषाध्यक्ष",
    "member_3_phone": "+91 98450 12343",
    "member_3_email": "g.naik@example.com",
    "member_4_name": "श्री सुब्रमण्य भट्ट",
    "member_4_role": "ट्रस्ट सदस्य",
    "member_4_phone": "+91 98450 12344",
    "member_4_email": "s.bhat@example.com",
    "member_5_name": "श्री वेंकटेश प्रभु",
    "member_5_role": "ट्रस्ट सदस्य",
    "member_5_phone": "+91 98450 12345",
    "member_5_email": "v.prabhu@example.com",
    "member_6_name": "श्री कृष्ण मूर्ति",
    "member_6_role": "ट्रस्ट सदस्य",
    "member_6_phone": "+91 98450 12346",
    "member_6_email": "k.murthy@example.com",
    "member_7_name": "श्री मंजुनाथ गौड़ा",
    "member_7_role": "ट्रस्ट सदस्य",
    "member_7_phone": "+91 98450 12347",
    "member_7_email": "m.gouda@example.com",
    "member_8_name": "श्री शंकर नारायण",
    "member_8_role": "ट्रस्ट सदस्य",
    "member_8_phone": "+91 98450 12348",
    "member_8_email": "s.narayan@example.com",
    "member_9_name": "श्री राघवेंद्र राव",
    "member_9_role": "ट्रस्ट सदस्य",
    "member_9_phone": "+91 98450 12349",
    "member_9_email": "r.rao@example.com",
    "member_10_name": "श्री दत्तात्रय भट्ट",
    "member_10_role": "ट्रस्ट सदस्य",
    "member_10_phone": "+91 98450 12350",
    "member_10_email": "d.bhat@example.com",
    "member_11_name": "श्री ईश्वर नायक",
    "member_11_role": "ट्रस्ट सदस्य",
    "member_11_phone": "+91 98450 12351",
    "member_11_email": "i.naik@example.com",
    "member_12_name": "श्री नारायण हेगड़े",
    "member_12_role": "ट्रस्ट सदस्य",
    "member_12_phone": "+91 98450 12352",
    "member_12_email": "n.hegde@example.com",
    "member_13_name": "श्री वासुदेव प्रभु",
    "member_13_role": "ट्रस्ट सदस्य",
    "member_13_phone": "+91 98450 12353",
    "member_13_email": "v.prabhu2@example.com",
    "member_14_name": "श्री रमेश नायक",
    "member_14_role": "ट्रस्ट सदस्य",
    "member_14_phone": "+91 98450 12354",
    "member_14_email": "r.naik@example.com",
    "member_15_name": "श्री सुरेश भट्ट",
    "member_15_role": "ट्रस्ट सदस्य",
    "member_15_phone": "+91 98450 12355",
    "member_15_email": "s.bhat2@example.com",

    // Index - Gallery Preview
    "gallery_preview_title": "गैलरी पूर्वावलोकन",

    // Index - Announcements
    "announcements_title": "मंदिर की घोषणाएँ",
    "ann1_date": "15 जनवरी, 2025",
    "ann1_title": "महा शिवरात्रि उत्सव",
    "ann1_desc": "महा शिवरात्रि उत्सव में शामिल हों। विशेष अभिषेक और रात भर भजन। सभी भक्तों को प्रसाद वितरण।",
    "ann1_badge": "महत्वपूर्ण",
    "ann2_date": "10 जनवरी, 2025",
    "ann2_title": "विशेष पूजा समय",
    "ann2_desc": "आगामी त्यौहार के लिए अपडेट किया गया समय। सुबह की पूजा 5:30 बजे शुरू होगी।",
    "ann2_badge": "कार्यक्रम",
    "ann3_date": "5 जनवरी, 2025",
    "ann3_title": "अन्नदानम कार्यक्रम",
    "ann3_desc": "इस महीने से दैनिक अन्नदानम कार्यक्रम। स्वयंसेवकों और प्रायोजकों की तलाश।",
    "ann3_badge": "सामान्य",

    // About page (Redesigned)
    "about_banner_title": "मंदिर के बारे में",
    "about_banner_subtitle": "इतिहास और विरासत",
    "about_main_title": "श्री सोमेश्वर मंदिर: उत्पत्ति और विरासत",
    "about_origins_title": "दिव्य शुरुआत",
    "about_p1": "होसकेरी, गोकर्ण में स्थित श्री सोमेश्वर मंदिर भगवान शिव को समर्पित एक पवित्र स्थान है, जो यहाँ सोमेश्वर — चंद्रमा के स्वामी — के रूप में विराजमान हैं। यह प्राचीन स्थल कई शताब्दियों से आध्यात्मिक सांत्वना और सांस्कृतिक निरंतरता के प्रतीक के रूप में सेवा कर रहा है, जो गोकर्ण के पवित्र भूगोल के साथ गहराई से जुड़ा हुआ है।",
    "about_p2": "स्थानीय मौखिक परंपराओं के अनुसार, मंदिर की उत्पत्ति होसकेरी क्षेत्र के शुरुआती निवासियों द्वारा एक 'स्वयंभू' (स्वयं प्रकट) लिंग की खोज से जुड़ी है। कहा जाता है कि प्राचीन ऋषियों ने यहाँ गहन तपस्या की थी, जिससे इस भूमि को पवित्रता मिली और मंदिर को एक ऐसे केंद्र बिंदु के रूप में स्थापित किया जहाँ वैदिक अनुष्ठान और स्थानीय लोक परंपराएँ सद्भाव से सहअस्तित्व में हैं।",
    "about_p3": "मंदिर की वास्तुकला, जो अपनी पारंपरिक तटीय द्रविड़ शैली की विशेषता रखती है, पिछली पीढ़ियों के कुशल शिल्प कौशल और भक्ति की बात करती है। स्थानीय परिवारों के संरक्षण और समुदाय के अटूट विश्वास के माध्यम से, मंदिर एक छोटे से वन तीर्थ से आज की भव्य संरचना में विकसित हुआ है, जो अपनी प्राचीन आध्यात्मिक आभा को बनाए हुए है।",
    "about_heritage_title": "एक जीवंत विरासत",
    "about_heritage_p": "आज, श्री सोमेश्वर मंदिर केवल पूजा का स्थान नहीं है, बल्कि ततीय कर्नाटक की लचीली विरासत का एक जीवित प्रमाण है। यह प्राचीन परंपराओं को बनाए रखना जारी रखता है, महा शिवरात्रि जैसे जीवंत त्यौहार मनाता है, और शांति और आशीर्वाद की तलाश में आने वाले हजारों भक्तों के बीच दिव्य अपनेपन की भावना को बढ़ावा देता है।",

    "about_trad_title": "आध्यात्मिक वातावरण",
    "about_trad_p": "मंदिर परिसर में प्रवेश करते ही वैदिक मंत्रों की सुखद ध्वनि और अगरबत्ती की सुगंध स्वागत करती है। दैनिक अनुष्ठान सदियों पुरानी आगम परंपराओं का पालन करते हैं, जिससे एक ऐसा वातावरण बनता है जहाँ हर कोना भक्ति की कहानी कहता है, प्राचीन पत्थर की नक्काशी से लेकर पवित्र घंटी की गूँज तक।",

    "timings_note": "नोट: त्यौहार के दिनों में समय बदल सकता है।",

    "sevas_title": "सेवा और पूजा",
    "sevas_th_slno": "क्र. सं.",
    "sevas_th_particulars": "विवरण",
    "seva_abhisheka": "अभिषेक",
    "seva_rudrabhisheka": "रुद्राभिषेक",
    "seva_panchamrutha": "पंचामृत",
    "seva_bilvarchane": "बिल्वार्चन",
    "contr_title": "योगदान विवरण",
    "contr_donation": "दान",
    "contr_renovation": "मंदिर जीर्णोद्धार",
    "contr_other": "अन्य योगदान",
    "contr_general": "सामान्य निधि",

    // Gallery page
    "gallery_photo_title": "फोटो गैलरी",
    "gallery_videos_title": "वीडियो",
    "filter_photos": "फोटो",
    "filter_videos": "वीडियो",
    "gallery_video1_title": "मंदिर के अनुष्ठान और दर्शन",
    "gallery_video1_desc": "दिव्य अनुष्ठानों और शांतिपूर्ण वातावरण के साक्षी बनें",
    "gallery_video2_title": "गोकर्ण मंदिर की झलकियां",
    "gallery_video2_desc": "मंदिर की पवित्र विरासत और सुंदरता का अनुभव करें",
    "gallery_video3_title": "पवित्र शोभायात्रा",
    "gallery_video3_desc": "दिव्य उत्सव समारोह और शोभायात्रा",
    "filter_all": "सब",
    "filter_temple": "मंदिर",
    "filter_festivals": "त्यौहार",
    "filter_deities": "देवता",

    // Donations page
    "donations_title": "मंदिर का समर्थन करें",
    "donations_desc": "आपके दान से दैनिक पूजा और सामुदायिक सेवाओं को बनाए रखने में मदद मिलती है।",
    "donations_bank": "बैंक:",
    "donations_bank_name": "स्टेट बैंक ऑफ इंडिया",
    "donations_ifsc": "आईएफएससी:",
    "donations_account": "खाता:",
    "seva_pooja": "दैनिक पूजा",
    "seva_annadanam": "अन्नदान",
    "seva_maintenance": "रखरखाव",

    // Contact page
    "contact_title": "संपर्क और स्थान",
    "contact_landline_label": "मंदिर लैंडलाइन:",
    "contact_bhat_label": "भट्ट:",
    "contact_address_label": "पता:",
    "contact_address": "श्री सोमेश्वर मंदिर, होसकेरी, गोकर्ण, कर्नाटक, भारत",

    // Gallery Page
    "gallery_title": "फोटो गैलरी",
    "gallery_intro_kn": "देवर दर्शन",
    "gallery_intro_title": "पवित्र दृश्य",
    "gallery_intro_desc": "श्री सोमेश्वर देव मंदिर के पवित्र परिसर से भक्तिपूर्ण क्षणों का एक संग्रह — देवता, आर्किटेक्चर, त्योहार और भक्त।",
    "gallery_filter_all": "✦ सभी फोटो",
    "gallery_filter_deity": "🕉 देवता",
    "gallery_filter_temple": "🛕 मंदिर",
    "gallery_filter_festivals": "🔥 त्योहार",
    "gallery_filter_devotees": "🙏 भक्त",
    "gallery_showing": "पवित्र क्षण दिखाए जा रहे हैं…",
    "gallery_videos": "वीडियो",
    "gallery_chant_desc": "मंदिर से पवित्र मंत्र",
    "gallery_watch_video": "▶ वीडियो देखें",
    "gallery_festival_highlights": "त्योहार की झलकियां",
    "gallery_festival_desc": "मंदिर त्योहार वीडियो — जल्द आ रहा है",
    "gallery_coming_soon": "▶ जल्द आ रहा है",

    // Footer
    "footer_temple_name": "श्री सोमेश्वर मंदिर",
    "footer_location": "होसकेरी, गोकर्ण, कर्नाटक",
    "footer_desc": "भगवान शिव को समर्पित प्राचीन मंदिर, दिव्य आशीर्वाद के साथ भक्तों की सेवा।",
    "footer_quick_links": "त्वरित लिंक",
    "footer_contact_us": "हमसे संपर्क करें",
    "footer_connect": "हमसे जुड़ें",
    "footer_copyright": "© 2025 श्री सोमेश्वर मंदिर होसकेरी। सर्वाधिकार सुरक्षित।"
  }
};

function loadTranslations(lang) {
  return translationsData[lang] || null;
}

function applyTranslations(lang) {
  const translations = loadTranslations(lang);
  if (!translations) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.style.fontWeight = 'bold';
      btn.style.color = '#ff9933';
    } else {
      btn.style.fontWeight = 'normal';
      btn.style.color = 'inherit';
    }
  });

  localStorage.setItem('preferredLang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLang') || defaultLang;

  if(savedLang !== 'en') {
      applyTranslations(savedLang);
  } else {
      document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === 'en') {
            btn.style.fontWeight = 'bold';
            btn.style.color = '#ff9933';
        }
      });
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      applyTranslations(btn.getAttribute('data-lang'));
    });
  });
});
