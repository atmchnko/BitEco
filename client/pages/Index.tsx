import { useState } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Какую комиссию вы берете?",
      answer: "Обычный План:\nДо 10 000 usdt - 4,5%\nДо 50 000 usdt - 4%\nОт 100 000 usdt - 3,5%\n\nБизнес план:\nДо 10 000 usdt - 4%\nДо 50 000 usdt - 3,5%\nОт 100 000 usdt - 3%",
    },
    {
      question: "Для чего нужен крипто-миксер?",
      answer: "Крипто-миксер позволяет повысить уровень конфиденциальности ваших транзакций. Он перемешивает ваши средства и возвращает чис��ые биткоины, не связанные с вашему адресу. Это помогает сохранить анонимность и защиту в цифровом веке.",
    },
    {
      question: "Какую криптовалюту я получу после смешивания?",
      answer: "Вы получаете чистую криптовалюту с различных источников, не связанных с вашей начальной транзакцией. Эти монеты ��езопасно отправлять на биржи и обменники без риска блокировки.",
    },
    {
      question: "Какие суммы вы принимаете на очистку?",
      answer: "Минимальная сумма для обработки составляет 500 USDT",
    },
    {
      question: "Какую информацию вы храните?",
      answer: "Мы не храним логи и не собираем данные пользователей. Проверки личности (KYC) и процедуры AML отсутствуют.",
    },
  ];

  return (
    <div className="min-h-screen bg-biteco-bg text-biteco-text">
      {/* Background Grid */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-20">
          <svg
            className="w-full h-[933px]"
            viewBox="0 0 1439 933"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="gridGradient" cx="50%" cy="51%" r="61.6%">
                <stop offset="0%" stopColor="#CCDCFD" stopOpacity="0.17" />
                <stop offset="100%" stopColor="#CCDCFD" stopOpacity="0" />
              </radialGradient>
            </defs>
            <g stroke="url(#gridGradient)" strokeWidth="1">
              {Array.from({ length: 20 }, (_, i) => (
                <line
                  key={`h-${i}`}
                  x1="-236"
                  y1={-325 + i * 91}
                  x2="1675"
                  y2={-325 + i * 91}
                />
              ))}
              {Array.from({ length: 20 }, (_, i) => (
                <line
                  key={`v-${i}`}
                  x1={-145 + i * 91}
                  y1="-416"
                  x2={-145 + i * 91}
                  y2="1495"
                />
              ))}
            </g>
          </svg>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/003a2a66a93065464dde7c9db22f30c23d935c67?width=3840"
          alt=""
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1920px] h-auto opacity-100 pointer-events-none"
        />
      </div>

      {/* Header */}
      <header className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link to="/">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/d4897c6e5a648f4e45e5e50fcddfc2b5011d3314?width=366"
              alt="BitEco"
              className="h-[46px] w-auto"
            />
          </Link>

          <nav className="flex items-center gap-6 px-5 py-2 rounded-2xl border border-biteco-border-light bg-[rgba(18,19,23,0.50)] backdrop-blur-sm">
            <div className="flex items-center gap-6">
              <a
                href="#about"
                className="text-base text-biteco-text hover:text-white transition-colors"
              >
                О нас
              </a>
              <a
                href="#faq"
                className="text-base text-biteco-text hover:text-white transition-colors"
              >
                FAQ
              </a>
              <a
                href="#contacts"
                className="text-base text-biteco-text hover:text-white transition-colors"
              >
                Контакты
              </a>
            </div>

            <button className="flex items-center gap-1.5 px-4 py-3 rounded-lg border border-biteco-border-light bg-biteco-card">
              <div
                className="w-4 h-4 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://api.builder.io/api/v1/image/assets/TEMP/b700f324c8a32cc8f3219461cba6d2f67724b350?width=32')",
                }}
              ></div>
              <span className="text-sm text-biteco-text">RU</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-col items-center gap-16">
          {/* Announcement Banner */}
          <div className="w-full p-5 rounded-2xl border border-biteco-border-light bg-[rgba(18,19,23,0.50)] backdrop-blur-sm">
            <p className="text-biteco-text text-center text-2xl sm:text-3xl font-medium leading-[135%]">
              Чистка ведеться в ручном режиме. Обращайтесь по контактам.
              Минимальная сумма ручной чистки - 500 USDT
            </p>
          </div>

          {/* Main Title */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-7">
            <h1 className="text-5xl sm:text-6xl lg:text-[70px] font-medium leading-[100%] text-biteco-text">
              Крипто Миксер
            </h1>

            <div className="relative w-[100px] h-[100px] flex-shrink-0">
              <svg
                width="110"
                height="110"
                viewBox="0 0 110 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <g filter="url(#filter0_i)">
                  <rect
                    y="10.4528"
                    width="100"
                    height="100"
                    rx="24"
                    transform="rotate(-6 0 10.4528)"
                    fill="#3D2F54"
                  />
                  <path
                    opacity="0.35"
                    d="M74.673 82.8904L74.1571 80.1138L51.7702 84.4313C42.7186 86.1782 33.9255 79.9176 32.1726 70.4756C30.4171 61.0352 36.3528 51.9329 45.4059 50.1873L60.3304 47.308C61.5167 47.0773 62.5628 46.3656 63.2394 45.3287C63.916 44.2919 64.168 43.0145 63.9402 41.7765C63.7087 40.5384 63.0158 39.4422 62.0135 38.7284C61.0112 38.0147 59.7814 37.7415 58.5937 37.969L39.1927 41.7123L39.7086 44.4889C40.021 46.1687 38.2342 47.3884 36.8701 46.4263L27.172 39.5928C26.8788 39.3863 26.6273 39.1217 26.4322 38.8142C26.237 38.5067 26.102 38.1625 26.035 37.8015C25.968 37.4405 25.9704 37.0698 26.0419 36.711C26.1134 36.3522 26.2527 36.0123 26.4517 35.711L33.0223 25.7366C33.9477 24.3329 36.048 24.8043 36.3602 26.4827L36.8775 29.2592L56.2787 25.5173C65.3316 23.7704 74.1233 30.031 75.8776 39.4729C77.6319 48.9149 71.696 58.0158 62.6428 59.7599L47.7198 62.6405C46.5335 62.8712 45.4874 63.583 44.8108 64.6198C44.1342 65.6566 43.8822 66.934 44.11 68.1721C44.3415 69.4096 45.034 70.5054 46.0356 71.2191C47.0373 71.9329 48.2665 72.2064 49.4538 71.9798L71.8419 67.6607L71.3246 64.8842C71.0123 63.2044 72.799 61.9848 74.1659 62.9465L83.8612 69.7803C85.095 70.6513 85.4193 72.3936 84.5816 73.6621L78.0106 83.6337C77.0856 85.0402 74.9839 84.569 74.673 82.8904Z"
                    fill="url(#paint0_linear)"
                  />
                  <path
                    d="M74.6436 82.8957L74.1275 80.1231L51.6839 84.4439C42.6081 86.1921 33.7973 79.9437 32.0426 70.5154C32.0426 70.5154 38.8951 74.027 49.3682 72.0103L71.8117 67.6882L71.2956 64.9156C70.9832 63.2382 72.7748 62.0195 74.1433 62.9795L83.8596 69.8C85.0974 70.6691 85.4218 72.4089 84.5815 73.676L77.9904 83.6365C77.0611 85.0416 74.9559 84.5717 74.6436 82.8957Z"
                    fill="#CACACA"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_i"
                    x="0"
                    y="0.000209719"
                    width="109.905"
                    height="110.905"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="2"
                      operator="erode"
                      in="SourceAlpha"
                      result="effect1_innerShadow"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear"
                    x1="49.4428"
                    y1="21.998"
                    x2="62.0357"
                    y2="87.2881"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#CACACA" />
                    <stop offset="1" stopColor="#CACACA" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[70px] font-medium leading-[100%] text-biteco-text">
              Биткоинов
            </h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-32"
      >
        <div className="flex flex-col items-center gap-8">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-5 max-w-[534px]">
            <span className="inline-flex px-3.5 py-2.5 rounded-3xl border border-[rgba(255,255,255,0.16)] bg-gradient-to-r from-[rgba(41,42,44,0.56)] to-[rgba(85,87,91,0.77)] text-biteco-text text-base font-medium">
              О нас
            </span>

            <div className="flex flex-col items-center gap-4 w-full">
              <h2 className="text-5xl sm:text-6xl lg:text-[70px] font-medium leading-[100%] text-biteco-text text-center">
                Немного о нас
              </h2>
              <p className="text-biteco-text-muted text-base font-medium leading-[135%] text-center">
                Мы используем самые сов��еменные технологии и методы для
                обеспечения максимальной безопасности и скорости наших услуг
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full mt-8">
            {/* Card 1 */}
            <div className="flex flex-col gap-4 p-8 pt-8 pb-0 rounded-3xl border border-biteco-border bg-biteco-bg overflow-hidden h-[400px] relative">
              <div className="flex flex-col gap-1">
                <h3 className="text-3xl font-medium leading-[135%] text-biteco-text">
                  Чистим
                </h3>
                <div className="inline-flex max-w-max px-2.5 py-2.5 rounded-2xl bg-[rgba(255,255,255,0.10)]">
                  <span className="text-3xl font-medium leading-[135%] text-biteco-text">
                    любые монеты
                  </span>
                </div>
              </div>

              <p className="text-base font-medium leading-[135%]">
                <span className="text-biteco-text-muted">Работаем с</span>
                <span className="text-biteco-text"> BTC, USDT, ETH, LTC </span>
                <span className="text-biteco-text-muted">
                  и тд. Пишите в support!
                </span>
              </p>

              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/87bdfbf61a62e673df5acf13d48c8f58962d68d1?width=1180"
                alt="Crypto coins"
                className="absolute bottom-0 left-0 w-full h-auto object-contain"
              />
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-4 p-8 pt-0 pb-8 rounded-3xl border border-biteco-border bg-biteco-bg overflow-hidden h-[400px] relative justify-end">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b4b24e79e71f9ce6ed7b84c4356c5dce21cc3918?width=1180"
                alt="Chain break illustration"
                className="absolute top-0 left-0 w-full h-auto object-contain"
              />

              <div className="relative z-10">
                <h3 className="text-3xl font-medium leading-[135%] text-biteco-text mb-4">
                  Обрыв цепочек
                </h3>
                <p className="text-biteco-text-muted text-base font-medium leading-[135%]">
                  Полностью запутываем следы с нашей новой обновленной системой
                  очистки. Вы получаете биржевые монеты с AML ~10%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-32"
      >
        <div className="flex flex-col items-center gap-8">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-5 max-w-[690px]">
            <span className="inline-flex px-3.5 py-2.5 rounded-3xl border border-[rgba(255,255,255,0.16)] bg-gradient-to-r from-[rgba(41,42,44,0.56)] to-[rgba(85,87,91,0.77)] text-biteco-text text-base font-medium">
              FAQ
            </span>

            <h2 className="text-5xl sm:text-6xl lg:text-[70px] font-medium leading-[100%] text-biteco-text text-center">
              Остались вопросы?
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="flex flex-col gap-5 w-full mt-8">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="rounded-[20px] overflow-hidden bg-biteco-card transition-all duration-300"
                style={{
                  border: `1px solid ${
                    openFaqIndex === index ? "#9950D1" : "#464749"
                  }`,
                }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className={`flex items-center justify-between gap-6 w-full px-8 py-2.5 transition-all duration-300 ${
                    openFaqIndex === index
                      ? "bg-gradient-to-r from-[#7C3AED] to-[#A855F7] border-[#A855F7]"
                      : "bg-biteco-card hover:bg-[#2e2f32]"
                  }`}
                >
                  <span className="text-2xl font-medium leading-[135%] text-biteco-text text-left flex-1">
                    {item.question}
                  </span>

                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      openFaqIndex === index ? "bg-[#9950D1]" : "bg-[#3E3F42]"
                    }`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="transition-transform duration-300"
                      style={{
                        transform:
                          openFaqIndex === index
                            ? "rotate(45deg)"
                            : "rotate(0deg)",
                      }}
                    >
                      <path
                        d="M7.33594 15.25V0.75H8.58594V15.25H7.33594ZM0.75 8.58594V7.33594H15.25V8.58594H0.75Z"
                        fill="#FFFFFF"
                      />
                    </svg>
                  </div>
                </button>

                {/* Answer Section */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight:
                      openFaqIndex === index ? "500px" : "0px",
                    opacity: openFaqIndex === index ? 1 : 0,
                  }}
                >
                  <div className="px-8 py-6 bg-biteco-bg border-t border-biteco-border">
                    <p className="text-base font-medium leading-[135%] text-biteco-text-muted whitespace-pre-line">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contacts"
        className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-32 mb-32"
      >
        <div className="flex flex-col items-center gap-8">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-5 max-w-[534px]">
            <span className="inline-flex px-3.5 py-2.5 rounded-3xl border border-[rgba(255,255,255,0.16)] bg-gradient-to-r from-[rgba(41,42,44,0.56)] to-[rgba(85,87,91,0.77)] text-biteco-text text-base font-medium">
              Контакты
            </span>

            <h2 className="text-5xl sm:text-6xl lg:text-[70px] font-medium leading-[100%] text-biteco-text text-center">
              Связь с нами
            </h2>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full mt-8">
            {/* Telegram Card */}
            <div className="flex flex-col gap-6 p-8 rounded-3xl border border-biteco-border bg-gradient-to-b from-[#222326] to-[#28292C]">
              <div className="flex items-center gap-5">
                <div className="w-[74px] h-[74px] rounded-3xl border border-[rgba(255,255,255,0.16)] bg-gradient-to-b from-[rgba(41,42,44,0.56)] to-[rgba(85,87,91,0.77)] flex items-center justify-center flex-shrink-0">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.9213 6.00684C29.7288 6.00684 30.3382 6.71489 30.0118 8.03239L26.0593 26.6618C25.7831 27.9861 24.9832 28.3049 23.8782 27.6886L14.45 20.7254C14.4134 20.6993 14.3835 20.6649 14.3628 20.6249C14.3422 20.5849 14.3315 20.5405 14.3315 20.4955C14.3315 20.4505 14.3422 20.4062 14.3628 20.3662C14.3835 20.3262 14.4134 20.2917 14.45 20.2656L25.3368 10.4336C25.8332 9.99419 25.2306 9.78169 24.5795 10.1786L10.9157 18.7993C10.874 18.826 10.8269 18.8429 10.7777 18.849C10.7286 18.855 10.6788 18.8499 10.6318 18.8342L4.83058 16.9999C3.54198 16.6242 3.54198 15.7393 5.12128 15.1086L28.3331 6.15559C28.5173 6.06724 28.7173 6.01666 28.9213 6.00684Z"
                      stroke="#CACACA"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <p className="text-biteco-text-muted text-xl font-medium leading-[135%]">
                    Telegram support
                  </p>
                  <p className="text-biteco-text text-2xl font-medium leading-[135%]">
                    @BitEco_Support
                  </p>
                </div>
              </div>

              <button className="flex items-center justify-center gap-2 py-3.5 rounded-xl border border-biteco-border bg-biteco-button hover:bg-[#4a4b4e] transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="20" height="20" rx="4" fill="#56575A" />
                  <path
                    d="M13.2409 13.2404C12.9954 13.2404 12.7599 13.1429 12.5863 12.9692C12.4126 12.7956 12.3151 12.5601 12.3151 12.3145V7.68486H7.68609C7.44056 7.68486 7.20508 7.58731 7.03145 7.41366C6.85783 7.24002 6.76029 7.0045 6.76029 6.75893C6.76029 6.51336 6.85783 6.27785 7.03145 6.1042C7.20508 5.93056 7.44056 5.83301 7.68609 5.83301H13.2409C13.4864 5.83301 13.7219 5.93056 13.8955 6.1042C14.0692 6.27785 14.1667 6.51336 14.1667 6.75893V12.3145C14.1667 12.5601 14.0692 12.7956 13.8955 12.9692C13.7219 13.1429 13.4864 13.2404 13.2409 13.2404Z"
                    fill="#CACACA"
                  />
                  <path
                    d="M6.76029 14.1663C6.57702 14.1667 6.39775 14.1127 6.24525 14.011C6.09276 13.9093 5.9739 13.7646 5.90376 13.5953C5.83363 13.4259 5.81539 13.2396 5.85135 13.0598C5.88732 12.8801 5.97586 12.7151 6.10575 12.5858L12.5864 6.1043C12.76 5.93069 12.9954 5.83301 13.2409 5.83301C13.4864 5.83301 13.7219 5.93056 13.8955 6.1042C14.0692 6.27785 14.1667 6.51336 14.1667 6.75893C14.1667 7.00447 14.069 7.23994 13.8954 7.41356L7.41483 13.895C7.24125 14.0687 7.00581 14.1663 6.76029 14.1663Z"
                    fill="#CACACA"
                  />
                </svg>
                <span className="text-biteco-text text-base leading-[135%]">
                  Написать
                </span>
              </button>
            </div>

            {/* Email Card */}
            <div className="flex flex-col gap-6 p-8 rounded-3xl border border-biteco-border bg-gradient-to-b from-[#222326] to-[#28292C]">
              <div className="flex items-center gap-5">
                <div className="w-[74px] h-[74px] rounded-3xl border border-[rgba(255,255,255,0.16)] bg-gradient-to-b from-[rgba(41,42,44,0.56)] to-[rgba(85,87,91,0.77)] flex items-center justify-center flex-shrink-0">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.35"
                      d="M18 33.6615C26.3883 33.6615 33 27.2908 33 18.1984C33 9.10614 26.3873 2.73535 18.0015 2.73535C9.61477 2.73535 2.99414 9.10614 2.99414 18.1984C2.99414 27.2908 9.60672 33.6606 18.0015 33.6606"
                      fill="#CACACA"
                    />
                    <path
                      d="M18.993 6.00817C17.0227 5.87205 15.0449 6.14441 13.1937 6.80689C11.3425 7.46937 9.66109 8.50643 8.26361 9.84775C6.86798 11.1903 5.78896 12.8053 5.0997 14.5833C4.41044 16.3613 4.12691 18.261 4.26826 20.1535C4.77213 27.0341 11.0004 32.423 18.4438 32.423H21.4377C21.8939 32.423 22.3315 32.2489 22.6542 31.9389C22.9768 31.6289 23.1581 31.2085 23.1581 30.7701C23.1581 30.3317 22.9768 29.9112 22.6542 29.6012C22.3315 29.2912 21.8939 29.1171 21.4377 29.1171H18.4438C12.7988 29.1171 8.07882 25.0782 7.70091 19.9224C7.59435 18.5018 7.80672 17.0757 8.32382 15.7409C8.84093 14.4061 9.65055 13.1936 10.6979 12.1857C12.8122 10.1523 15.7483 9.11088 18.7525 9.30431C24.1167 9.66832 28.3205 14.2032 28.3205 19.6278V20.8508C28.3205 21.7633 27.5483 22.5042 26.5995 22.5042C26.1437 22.5032 25.7069 22.3287 25.3845 22.0191C25.0622 21.7094 24.8807 21.2897 24.8796 20.8517V18.1983C24.8779 16.4449 24.1523 14.7638 22.8618 13.524C21.5714 12.2842 19.8217 11.587 17.9968 11.5854C16.1718 11.587 14.4221 12.2842 13.1317 13.524C11.8413 14.7638 11.1156 16.4449 11.1139 18.1983C11.1159 19.9515 11.8417 21.6323 13.1321 22.8719C14.4224 24.1115 16.172 24.8086 17.9968 24.8102C19.8034 24.8102 21.4377 24.1248 22.6662 23.0248C23.6149 24.1079 25.0169 24.8102 26.5995 24.8102C29.4458 24.8102 31.7614 22.5854 31.7614 19.8508V18.6288C31.7614 11.4773 26.1525 5.49032 18.993 6.00817ZM17.9968 21.5042C17.0845 21.5032 16.2099 21.1545 15.5649 20.5348C14.9198 19.915 14.557 19.0747 14.5559 18.1983C14.5567 17.3216 14.9194 16.4811 15.5645 15.8611C16.2096 15.2412 17.0843 14.8924 17.9968 14.8914C18.9092 14.8924 19.7839 15.2412 20.429 15.8611C21.0741 16.4811 21.4368 17.3216 21.4377 18.1983C21.4366 19.0747 21.0737 19.915 20.4286 20.5348C19.7836 21.1545 18.909 21.5032 17.9968 21.5042Z"
                      fill="#CACACA"
                    />
                  </svg>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <p className="text-biteco-text-muted text-xl font-medium leading-[135%]">
                    Mail
                  </p>
                  <p className="text-biteco-text text-2xl font-medium leading-[135%]">
                    mixcrypto9@gmail.com
                  </p>
                </div>
              </div>

              <button className="flex items-center justify-center gap-2 py-3.5 rounded-xl border border-biteco-border bg-biteco-button hover:bg-[#4a4b4e] transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="20" height="20" rx="4" fill="#56575A" />
                  <path
                    d="M13.2408 13.2404C12.9952 13.2404 12.7598 13.1429 12.5861 12.9692C12.4125 12.7956 12.315 12.5601 12.315 12.3145V7.68486H7.68597C7.44044 7.68486 7.20495 7.58731 7.03133 7.41366C6.85771 7.24002 6.76017 7.0045 6.76017 6.75893C6.76017 6.51336 6.85771 6.27785 7.03133 6.1042C7.20495 5.93056 7.44044 5.83301 7.68597 5.83301H13.2408C13.4863 5.83301 13.7218 5.93056 13.8954 6.1042C14.069 6.27785 14.1666 6.51336 14.1666 6.75893V12.3145C14.1666 12.5601 14.069 12.7956 13.8954 12.9692C13.7218 13.1429 13.4863 13.2404 13.2408 13.2404Z"
                    fill="#CACACA"
                  />
                  <path
                    d="M6.76017 14.1663C6.5769 14.1667 6.39763 14.1127 6.24513 14.011C6.09263 13.9093 5.97377 13.7646 5.90364 13.5953C5.83351 13.4259 5.81527 13.2396 5.85123 13.0598C5.88719 12.8801 5.97574 12.7151 6.10563 12.5858L12.5862 6.1043C12.7598 5.93069 12.9953 5.83301 13.2408 5.83301C13.4863 5.83301 13.7218 5.93056 13.8954 6.1042C14.069 6.27785 14.1666 6.51336 14.1666 6.75893C14.1666 7.00447 14.0689 7.23994 13.8953 7.41356L7.41471 13.895C7.24113 14.0687 7.00569 14.1663 6.76017 14.1663Z"
                    fill="#CACACA"
                  />
                </svg>
                <span className="text-biteco-text text-base leading-[135%]">
                  Написать
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
