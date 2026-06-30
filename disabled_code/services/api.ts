// API Service بدون نیاز به سرور واقعی
export const apiService = {
  // حالت توسعه: true = از داده‌های ساختگی استفاده کن
  isMockMode: true,

  // دریافت پزشکان برتر
  getTopDoctors: async (limit: number = 3) => {
    if (apiService.isMockMode) {
      // داده‌های ساختگی
      await new Promise(resolve => setTimeout(resolve, 500)); // شبیه‌سازی تاخیر

      return [
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
          visitType: "حضوری و آنلاین"
        },
        {
          id: 2,
          name: "دکتر فاطمه کریمی",
          specialty: "متخصص پوست و مو",
          rate: 4.8,
          reviews: 94,
          nextTime: "فردا ساعت ۱۰:۰۰",
          city: "مشهد",
          image: "ف ک",
          experience: "۱۲ سال سابقه",
          medicalCode: "۳۴۵۶۷۸",
          fee: 180000,
          insurance: ["بیمه آسیا", "بیمه سلامت"],
          visitType: "حضوری"
        },
        {
          id: 3,
          name: "دکتر رضا احمدی",
          specialty: "متخصص مغز و اعصاب",
          rate: 4.7,
          reviews: 76,
          nextTime: "شنبه ساعت ۱۶:۰۰",
          city: "اصفهان",
          image: "ر ا",
          experience: "۱۰ سال سابقه",
          medicalCode: "۵۶۷۸۹۰",
          fee: 200000,
          insurance: ["تأمین اجتماعی"],
          visitType: "آنلاین و حضوری"
        }
      ].slice(0, limit);
    }

    // در حالت واقعی به سرور واقعی وصل می‌شود
    // try {
    //   const response = await fetch('http://localhost:8000/api/doctors/top?limit=' + limit);
    //   return await response.json();
    // } catch (error) {
    //   console.error('خطا در دریافت پزشکان:', error);
    //   return []; // Fallback
    // }
  },

  // دریافت تخصص‌ها
  getSpecialties: async () => {
    if (apiService.isMockMode) {
      await new Promise(resolve => setTimeout(resolve, 300));

      return [
        { id: 1, title: "قلب و عروق", icon: "❤️", doctors: 128 },
        { id: 2, title: "مغز و اعصاب", icon: "🧠", doctors: 96 },
        { id: 3, title: "ارتوپدی", icon: "🦴", doctors: 84 },
        { id: 4, title: "زنان و زایمان", icon: "👩‍⚕️", doctors: 142 },
        { id: 5, title: "کودکان", icon: "🧸", doctors: 73 },
        { id: 6, title: "پوست و مو", icon: "✨", doctors: 118 },
        { id: 7, title: "چشم پزشکی", icon: "👁️", doctors: 64 },
        { id: 8, title: "گوش، حلق و بینی", icon: "👂", doctors: 58 },
        { id: 9, title: "دندانپزشکی", icon: "🦷", doctors: 155 },
        { id: 10, title: "روانشناسی", icon: "🧩", doctors: 91 },
        { id: 11, title: "اورولوژی", icon: "🧪", doctors: 47 },
        { id: 12, title: "داخلی", icon: "🩺", doctors: 133 }
      ];
    }
  },

  // دریافت آمار
  getStats: async () => {
    if (apiService.isMockMode) {
      await new Promise(resolve => setTimeout(resolve, 200));

      return {
        activeDoctors: 1200,
        totalPatients: 45000,
        totalAppointments: 80000,
        specialtiesCount: 40,
        satisfactionRate: 96
      };
    }
  },

  // جستجوی پزشکان
  searchDoctors: async (params: {
    query?: string;
    specialty?: string;
    city?: string;
    province?: string;
    date?: string;
  }) => {
    if (apiService.isMockMode) {
      await new Promise(resolve => setTimeout(resolve, 800));

      const allDoctors = await apiService.getTopDoctors(10);

      let filtered = [...allDoctors];

      if (params.query) {
        filtered = filtered.filter(d =>
          d.name.includes(params.query!) ||
          d.specialty.includes(params.query!) ||
          d.city.includes(params.query!)
        );
      }

      if (params.specialty) {
        filtered = filtered.filter(d => d.specialty === params.specialty);
      }

      if (params.city) {
        filtered = filtered.filter(d => d.city === params.city);
      }

      return {
        doctors: filtered,
        total: filtered.length,
        page: 1,
        limit: 10
      };
    }
  }
};
