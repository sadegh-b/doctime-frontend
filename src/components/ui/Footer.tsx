export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="w-full bg-black text-gray-300 pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-800 pb-12">

        {/* معرفی */}
        <div className="text-right">
          <h2 className="text-white text-3xl font-extrabold mb-6">
            DocTime
          </h2>

          <p className="text-sm leading-8">
            داک‌تایم، پلتفرم هوشمند سلامت ایران. با ما می‌توانید
            در کمتر از یک دقیقه از بهترین پزشکان متخصص نوبت
            بگیرید و مشاوره آنلاین داشته باشید.
          </p>
        </div>

        {/* خدمات */}
        <div className="text-right">
          <h3 className="text-white font-bold text-lg mb-6">
            خدمات داک‌تایم
          </h3>

          <ul className="space-y-4 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                نوبت‌دهی آنلاین مطب
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white transition">
                مشاوره تلفنی و متنی
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white transition">
                پزشکان متخصص
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white transition">
                مجله علمی سلامت
              </a>
            </li>
          </ul>
        </div>

        {/* پشتیبانی */}
        <div className="text-right">
          <h3 className="text-white font-bold text-lg mb-6">
            پشتیبانی
          </h3>

          <ul className="space-y-4 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                سوالات متداول
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white transition">
                تماس با پشتیبانی
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white transition">
                قوانین و مقررات
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white transition">
                حریم خصوصی
              </a>
            </li>
          </ul>
        </div>

        {/* تماس */}
        <div className="text-right">
          <h3 className="text-white font-bold text-lg mb-6">
            اطلاعات تماس
          </h3>

          <p className="text-sm mb-4 leading-7">
            📍 تهران، خیابان ولیعصر، بالاتر از میدان ونک
          </p>

          <p className="text-sm mb-6 text-white font-bold">
            📞 ۰۲۱-۹۱۰۰۰۰۰۰
          </p>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition">
              📱
            </div>

            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition">
              📸
            </div>
          </div>
        </div>
      </div>

      {/* کپی‌رایت */}
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs text-gray-500 mt-8">
          تمامی حقوق برای سامانه DocTime محفوظ است.
          طراحی و توسعه توسط محمدصادق بلوچ.
        </p>
      </div>
    </footer>
  );
}
