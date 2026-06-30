// API ساختگی با LocalStorage
export const mockApi = {
  // ذخیره داده‌ها در LocalStorage
  initMockData: () => {
    if (!localStorage.getItem('doctime_mock_data')) {
      const mockData = {
        doctors: [
          {
            id: 1,
            name: "دکتر علی محمدی",
            specialty: "متخصص قلب و عروق",
            rate: 4.9,
            reviews: 128,
            nextTime: "امروز ساعت ۱۸:۳۰",
            city: "تهران",
            image: "ع م",
            experience: "۱۵ سال سابقه",
            medicalCode: "۱۲۳۴۵۶",
            fee: 150000,
            insurance: ["تأمین اجتماعی", "بیمه سلامت"],
            visitType: "حضوری و آنلاین",
            province: "تهران",
            availableDates: ["1403/02/15", "1403/02/16", "1403/02/17"],
            education: ["دکترای پزشکی عمومی از دانشگاه تهران", "فوق تخصص قلب و عروق از دانشگاه علوم پزشکی شهید بهشتی"],
            languages: ["فارسی", "انگلیسی"]
          },
          // بقیه داده‌ها...
        ],
        specialties: [
          { id: 1, title: "قلب و عروق", icon: "❤️", doctors: 128 },
          // بقیه داده‌ها...
        ],
        stats: {
          activeDoctors: 1200,
          totalPatients: 45000,
          totalAppointments: 80000,
          specialtiesCount: 40,
          satisfactionRate: 96
        }
      };
      localStorage.setItem('doctime_mock_data', JSON.stringify(mockData));
    }
  },

  // شبیه‌سازی تاخیر شبکه
  delay: (ms: number) => new Promise(resolve => setTimeout(resolve, ms)),

  // دریافت پزشکان برتر
  getTopDoctors: async (limit: number = 3) => {
    await mockApi.delay(500); // تاخیر 500ms
    const data = JSON.parse(localStorage.getItem('doctime_mock_data') || '{}');
    return data.doctors?.slice(0, limit) || [];
  },

  // دریافت تخصص‌ها
  getSpecialties: async () => {
    await mockApi.delay(300);
    const data = JSON.parse(localStorage.getItem('doctime_mock_data') || '{}');
    return data.specialties || [];
  },

  // دریافت آمار
  getStats: async () => {
    await mockApi.delay(200);
    const data = JSON.parse(localStorage.getItem('doctime_mock_data') || '{}');
    return data.stats || {};
  },

  // جستجوی پزشکان
  searchDoctors: async (params: any) => {
    await mockApi.delay(800);
    const data = JSON.parse(localStorage.getItem('doctime_mock_data') || '{}');
    let doctors = data.doctors || [];

    // فیلتر کردن
    if (params.query) {
      doctors = doctors.filter((d: any) =>
        d.name.includes(params.query) ||
        d.specialty.includes(params.query)
      );
    }

    if (params.specialty) {
      doctors = doctors.filter((d: any) =>
        d.specialty === params.specialty
      );
    }

    if (params.city) {
      doctors = doctors.filter((d: any) =>
        d.city === params.city
      );
    }

    return {
      doctors,
      total: doctors.length
    };
  }
};
