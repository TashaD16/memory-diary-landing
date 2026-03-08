"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { TreePine, Sparkles, Users, Calendar, Image, Bell, Smartphone, Star, Apple, Check, ChevronRight, Zap, Printer } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-stone-200 bg-background/90 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-700 to-stone-600 flex items-center justify-center">
              <TreePine className="h-4 w-4 text-amber-100" />
            </div>
            <span className="font-bold text-lg tracking-tight">Memory Diary</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Возможности</Link>
            <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Тарифы</Link>
            <Link href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</Link>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" asChild>
              <Link href="#pricing">Войти</Link>
            </Button>
            <Button size="sm" className="bg-amber-800 hover:bg-amber-700 text-amber-50 border-0" asChild>
              <Link href="#pricing">Начать бесплатно</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section — full video banner */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/0803md.mp4" type="video/mp4" />
        </video>
        {/* Warm beige gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/55 via-stone-900/45 to-stone-950/70" />

        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-amber-100/15 text-amber-200 border border-amber-400/30 hover:bg-amber-100/20 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 mr-1.5" />
              Оцифруйте историю вашей семьи
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-white">
              Онлайн-конструктор<br />
              <span className="text-amber-300">вашей семейной</span><br />
              истории
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Приглашайте близких, рисуйте семейное древо, загружайте фотографии и сохраняйте воспоминания для будущих поколений
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-amber-700 hover:bg-amber-600 text-amber-50 border-0 h-12 px-8 text-base" asChild>
                <Link href="#pricing">
                  Построить древо бесплатно
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base border-white/25 hover:bg-white/10 text-white backdrop-blur-sm" asChild>
                <Link href="#features">Узнать больше</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-stone-200 bg-amber-50/60">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
            {[
              { value: "4,9", label: "оценка на Google & AppStore", icon: Star },
              { value: "420K+", label: "скачиваний приложения", icon: Zap },
              { value: "13M+", label: "персон в базе", icon: Users },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center mb-1">
                  <stat.icon className="h-5 w-5 text-amber-700" />
                </div>
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative">
        <div className="dot-grid absolute inset-0 opacity-60" />
        <div className="container mx-auto px-6 max-w-7xl relative">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border border-amber-200 px-3 py-1 text-xs">
              Возможности
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              История вашей семьи<br />
              <span className="gradient-text">в одном месте</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {[
              { num: "01", icon: Smartphone, title: "Генеалогическое древо", desc: "Пользуйтесь на телефоне, планшете и ПК — все данные синхронизированы в реальном времени" },
              { num: "02", icon: Users, title: "Совместная работа", desc: "Приглашайте родственников. Бесконечный размер древа позволит добавить всю семью" },
              { num: "03", icon: Calendar, title: "Даты и события", desc: "Заполняйте важные даты, места рождения и ключевые события жизни каждого родственника" },
              { num: "04", icon: Image, title: "Семейный архив", desc: "Храните фотографии, документы и интересные заметки о вашей семье в одном месте" },
              { num: "05", icon: Bell, title: "Умные уведомления", desc: "Получайте напоминания о предстоящих важных датах в вашей семье" },
              { num: "06", icon: Printer, title: "Экспорт и печать", desc: "Воспользуйтесь расширенными функциями и распечатайте красивое семейное древо" },
            ].map((feature, i) => (
              <div key={i} className="glass-card rounded-xl p-6 flex gap-5 group hover:border-amber-400/40 transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                    <feature.icon className="h-5 w-5 text-amber-700" />
                  </div>
                </div>
                <div>
                  <div className="text-xs text-amber-600 font-mono mb-1">{feature.num}</div>
                  <h3 className="text-base font-semibold mb-1.5">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 border-y border-stone-200 bg-amber-50/60">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border border-amber-200 px-3 py-1 text-xs">
              Отзывы
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Что говорят<br />
              <span className="gradient-text">пользователи</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {[
              { name: "Далья", text: "Отличное приложение! Очень удобное, понятное и супер полезное! Это мой первый отзыв за 9 лет использования AppStore, вот насколько понравилось!" },
              { name: "Ольга", text: "Крутое приложение! Сразу приобрели премиум. Сыну 7 лет, вместе сидим разбираемся в семейном роде. Разработчикам успехов!" },
              { name: "Тиврок", text: "Очень классное приложение, отзывчивый разработчик. Не жалко ни рубля на подписку! Спасибо за такое замечательное приложение!" },
              { name: "Саша", text: "Приложение дало ощутимый толчок для изучения моих родственников. С нетерпением жду нововведений! Спасибо!" },
              { name: "Алекс", text: "Великолепное приложение которое постоянно развивается, не останавливайтесь на достигнутом и продолжайте радовать пользователей!" },
              { name: "Руслан", text: "Пока всё отлично. Зачотная прога. Большой плюс за то что работает на Huawei без Google сервисов." },
            ].map((testimonial, i) => (
              <div key={i} className="glass-card rounded-xl p-6 flex flex-col gap-4 hover:border-amber-400/40 transition-all duration-300">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{testimonial.text}</p>
                <div className="flex items-center gap-3 pt-2 border-t border-stone-200">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-600 to-stone-500 flex items-center justify-center text-xs font-bold text-white">
                    {testimonial.name[0]}
                  </div>
                  <span className="text-sm font-medium">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 relative">
        <div className="dot-grid absolute inset-0 opacity-60" />
        <div className="container mx-auto px-6 max-w-7xl relative">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border border-amber-200 px-3 py-1 text-xs">
              Тарифы
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Выберите<br />
              <span className="gradient-text">свой план</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Начните бесплатно и расширьте возможности по мере роста вашего семейного древа
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                name: "Бесплатный",
                price: "0₽",
                period: "навсегда",
                features: ["До 50 человек в древе", "До 100 фотографий", "До 10 видео", "Базовые AI-аватары", "Совместная работа"],
                cta: "Начать бесплатно",
                featured: false,
              },
              {
                name: "Премиум",
                price: "499₽",
                period: "в месяц",
                features: ["Неограниченное количество людей", "Неограниченное хранилище", "Продвинутые AI-аватары", "Приоритетная поддержка", "Экспорт данных", "Расширенная аналитика"],
                cta: "Попробовать 14 дней",
                featured: true,
              },
              {
                name: "Семейный",
                price: "999₽",
                period: "в месяц",
                features: ["Всё из Премиум", "До 10 семейных аккаунтов", "Приватные семейные группы", "Персональный менеджер", "Кастомные AI-модели"],
                cta: "Связаться с нами",
                featured: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-6 flex flex-col gap-6 transition-all duration-300 ${
                  plan.featured
                    ? "bg-gradient-to-b from-amber-800 to-stone-800 border border-amber-600/50 text-amber-50 shadow-xl"
                    : "glass-card hover:border-amber-400/40"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-amber-500 text-white border-0 px-3 py-1 text-xs font-medium">
                      <Sparkles className="h-3 w-3 mr-1" />
                      Популярно
                    </Badge>
                  </div>
                )}
                <div>
                  <div className={`text-sm mb-3 ${plan.featured ? "text-amber-300" : "text-muted-foreground"}`}>{plan.name}</div>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className={`mb-1 text-sm ${plan.featured ? "text-amber-300" : "text-muted-foreground"}`}>/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <div className={`h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.featured ? "bg-amber-600/40" : "bg-amber-100"}`}>
                        <Check className={`h-3 w-3 ${plan.featured ? "text-amber-300" : "text-amber-700"}`} />
                      </div>
                      <span className={plan.featured ? "text-amber-100" : "text-muted-foreground"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full h-11 ${
                    plan.featured
                      ? "bg-amber-500 hover:bg-amber-400 text-white border-0"
                      : "bg-amber-800 hover:bg-amber-700 text-amber-50 border-0"
                  }`}
                  asChild
                >
                  <Link href="#">{plan.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 border-t border-stone-200 bg-amber-50/60">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border border-amber-200 px-3 py-1 text-xs">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Частые<br />
              <span className="gradient-text">вопросы</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {[
              { q: "Как распечатать древо?", a: "В премиум-планах доступна функция экспорта и печати семейного древа в различных форматах (PDF, SVG). Вы можете распечатать древо прямо из приложения или экспортировать файл." },
              { q: "Как обеспечена приватность данных?", a: "Мы используем современные технологии шифрования. Вы полностью контролируете, кто может видеть информацию о вашей семье." },
              { q: "Как работает AI-аватар?", a: "AI-аватар анализирует всю информацию в профиле: воспоминания, фотографии, документы. На основе этих данных создаётся персонализированная модель." },
              { q: "Можно ли экспортировать данные?", a: "Да, в премиум-планах доступен полный экспорт всех данных в различных форматах: JSON, PDF, GEDCOM." },
              { q: "Сколько человек могут работать над одним древом?", a: "В бесплатном плане до 5 человек. В премиум-плане количество участников неограничено." },
            ].map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-card rounded-xl px-5 border-stone-200 data-[state=open]:border-amber-400/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-sm font-medium hover:no-underline py-5 hover:text-amber-700 transition-colors">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-5 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900 via-stone-800 to-amber-900" />
        <div className="orb w-96 h-96 bg-amber-600 top-0 left-1/2 -translate-x-1/2 opacity-20" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            Начните сохранять<br />
            <span className="text-amber-300">семейную историю сегодня</span>
          </h2>
          <p className="text-amber-200/70 mb-10 text-lg max-w-xl mx-auto">
            Бесплатно. Без кредитной карты. Первые шаги за 2 минуты.
          </p>
          <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-white border-0 h-13 px-10 text-base" asChild>
            <Link href="#pricing">
              Создать семейное древо
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 py-16 bg-stone-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-700 to-stone-600 flex items-center justify-center">
                  <TreePine className="h-4 w-4 text-amber-100" />
                </div>
                <span className="font-bold text-lg">Memory Diary</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Сохраняйте семейную историю для будущих поколений. Оживляйте воспоминания с помощью ИИ.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-5">О проекте</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#features" className="hover:text-amber-700 transition-colors">Возможности</Link></li>
                <li><Link href="#pricing" className="hover:text-amber-700 transition-colors">Тарифы</Link></li>
                <li><Link href="#faq" className="hover:text-amber-700 transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-5">Поддержка</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-amber-700 transition-colors">Центр помощи</Link></li>
                <li><Link href="#" className="hover:text-amber-700 transition-colors">Контакты</Link></li>
                <li><Link href="#" className="hover:text-amber-700 transition-colors">Соглашение</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-5">Скачать</h3>
              <div className="space-y-3">
                <Link href="#" className="flex items-center gap-3 p-3 rounded-lg border border-stone-200 hover:border-amber-400 hover:bg-amber-50 transition-all text-sm group">
                  <Apple className="h-4 w-4 text-muted-foreground group-hover:text-amber-700 transition-colors" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">App Store</span>
                </Link>
                <Link href="#" className="flex items-center gap-3 p-3 rounded-lg border border-stone-200 hover:border-amber-400 hover:bg-amber-50 transition-all text-sm group">
                  <Smartphone className="h-4 w-4 text-muted-foreground group-hover:text-amber-700 transition-colors" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">Google Play</span>
                </Link>
              </div>
            </div>
          </div>
          <Separator className="bg-stone-200 mb-8" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>&copy; 2024 Memory Diary. Все права защищены.</p>
            <p>support@memorydiary.ru</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
