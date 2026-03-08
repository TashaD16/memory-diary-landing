"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { TreePine, Heart, Share2, Bot, Shield, Image, Sparkles, Users, Calendar, Printer, Bell, Smartphone, Star, Apple } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-bold text-primary">
            <TreePine className="h-6 w-6" />
            <span className="font-playfair">Memory Diary</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">О проекте</Link>
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">Возможности</Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Тарифы</Link>
            <Button variant="outline" size="sm" asChild>
              <Link href="#pricing">Войти</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair leading-tight">
              Онлайн-конструктор<br />
              вашей семейной<br />
              истории
          </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Приглашайте близких, рисуйте ваше семейное древо, загружайте фотографии, записывайте интересные факты. Сохраните свои воспоминания
            </p>
            <Button size="lg" className="text-lg px-10 py-7 h-auto font-semibold" asChild>
              <Link href="#pricing">Построить древо</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50 border-y">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="h-6 w-6 text-primary fill-primary" />
                <span className="text-3xl font-bold">4,9</span>
              </div>
              <p className="text-muted-foreground">оценка на Google & AppStore</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">&gt;420</div>
              <p className="text-muted-foreground">тысяч скачиваний</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">&gt;13</div>
              <p className="text-muted-foreground">миллиона персон</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - 6 steps */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">История вашей семьи в одном месте</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { 
                num: "1", 
                icon: Smartphone, 
                title: "Бесплатно создайте генеалогическое древо", 
                desc: "Пользуйтесь сервисом на телефоне, планшете и ПК, все данные будут синхронизированы" 
              },
              { 
                num: "2", 
                icon: Users, 
                title: "Пригласите своих близких", 
                desc: "Для совместного заполнения. Бесконечный размер древа позволит добавить всех своих родственников" 
              },
              { 
                num: "3", 
                icon: Calendar, 
                title: "Заполните данные о себе и своих родственниках", 
                desc: "Важные даты, места и события" 
              },
              { 
                num: "4", 
                icon: Image, 
                title: "Сохраните семейные фотографии", 
                desc: "Важные документы и интересные заметки о своей семье" 
              },
              { 
                num: "5", 
                icon: Bell, 
                title: "Получайте уведомления", 
                desc: "На телефон от Memory Diary о предстоящих важных датах в вашей семье" 
              },
              { 
                num: "6", 
                icon: Printer, 
                title: "Воспользуйтесь расширенными функциями", 
                desc: "И распечатайте древо своей семьи" 
              },
            ].map((feature, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    {feature.num}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Отзывы о сервисе</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Далья", text: "Отличное приложение! Буду всем его рекомендовать) Очень удобное, понятное и супер полезное! Надеюсь в дальнейшем появится синхронизация с чужими древами (что-то из области фантастики))) P.S. Это мой первый отзыв за 9 лет использования appstore, вот на столько понравилось!" },
              { name: "Ольга", text: "Крутое приложение! Сразу приобрели премиум версию. Сыну 7 лет, вместе сидим разбираемся в семейном роде. Разработчикам успехов!" },
              { name: "Тиврок", text: "Очень классное приложение, отзывчивый разработчик, который поможет в любой непонятной ситуации! Просто супер!!! Не жалко ни потраченного рубля на подписку! Спасибо за такое замечательное приложение и за отзывчивость" },
              { name: "Саша", text: "Приложение дало ощутимый толчок для изучения и поиска моих родственников, до этого пробовал составлять в xmimd, выходило как-то криво. Лично мне функционала хватает для грамотного построения. С нетерпением жду нововведений и новых идей от разработчиков! Спасибо!" },
              { name: "Алекс", text: "Великолепное приложение которое постоянно развивается, не останавливайтесь на достигнутом и продолжайте радовать пользователей своим функционалом👏" },
              { name: "Руслан", text: "Пока всё отлично. Зачотная прога. Главное что бы в будущем создатели не испортили её, а наоборот только улутшали. Большой жирный плюс за то что прога работает на телефонах Huawei без гугле сервисов." },
            ].map((testimonial, i) => (
              <Card key={i} className="border-2">
                <CardContent className="pt-6">
                  <p className="text-sm mb-4 leading-relaxed">{testimonial.text}</p>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Выберите свой план</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Начните бесплатно и расширьте возможности по мере роста вашего семейного древа
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Бесплатный", price: "0₽", period: "навсегда", features: ["До 50 человек в древе", "До 100 фотографий", "До 10 видео", "Базовые AI-аватары", "Совместная работа"], featured: false },
              { name: "Премиум", price: "499₽", period: "в месяц", features: ["Неограниченное количество людей", "Неограниченное хранилище", "Продвинутые AI-аватары", "Приоритетная поддержка", "Экспорт данных", "Расширенная аналитика"], featured: true },
              { name: "Семейный", price: "999₽", period: "в месяц", features: ["Всё из Премиум", "До 10 семейных аккаунтов", "Приватные семейные группы", "Персональный менеджер", "Кастомные AI-модели"], featured: false },
            ].map((plan, i) => (
              <Card key={i} className={plan.featured ? "border-primary border-2 relative" : "border-2"}>
                {plan.featured && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Популярно</Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold my-4">{plan.price}</div>
                  <CardDescription>{plan.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.featured ? "default" : "outline"} size="lg">
                    {plan.name === "Бесплатный" ? "Начать бесплатно" : plan.name === "Премиум" ? "Попробовать 14 дней" : "Связаться с нами"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Часто задаваемые вопросы</h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "Как распечатать древо?", a: "В премиум-планах доступна функция экспорта и печати семейного древа в различных форматах. Вы можете распечатать древо прямо из приложения или экспортировать в PDF для печати." },
              { q: "Как обеспечить приватность данных?", a: "Мы используем современные технологии шифрования для защиты всех данных. Вы полностью контролируете, кто может видеть информацию о вашей семье." },
              { q: "Как работает AI-аватар?", a: "AI-аватар анализирует всю информацию, добавленную к профилю человека: воспоминания, фотографии, документы, истории. На основе этих данных создаётся персонализированная модель." },
              { q: "Можно ли экспортировать данные?", a: "Да, в премиум-планах доступен полный экспорт всех данных в различных форматах (JSON, PDF, GEDCOM)." },
              { q: "Сколько человек может работать над одним древом?", a: "В бесплатном плане до 5 человек могут совместно работать над древом. В премиум-плане количество неограничено." },
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TreePine className="h-6 w-6" />
                <span className="font-bold text-lg font-playfair">Memory Diary</span>
              </div>
              <p className="text-sm opacity-80 mb-4">
                Сохраняйте семейную историю для будущих поколений. Оживляйте воспоминания с помощью искусственного интеллекта.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">О проекте</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link href="#features" className="hover:opacity-100 transition-opacity">Возможности</Link></li>
                <li><Link href="#pricing" className="hover:opacity-100 transition-opacity">Тарифы</Link></li>
                <li><Link href="#faq" className="hover:opacity-100 transition-opacity">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link href="#" className="hover:opacity-100 transition-opacity">Центр помощи</Link></li>
                <li><Link href="#" className="hover:opacity-100 transition-opacity">Контакты</Link></li>
                <li><Link href="#" className="hover:opacity-100 transition-opacity">Пользовательское соглашение</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Скачать приложение</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-background/10 border-background/20 hover:bg-background/20" asChild>
                  <Link href="#">
                    <Apple className="mr-2 h-4 w-4" />
                    App Store
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-background/10 border-background/20 hover:bg-background/20" asChild>
                  <Link href="#">
                    <Smartphone className="mr-2 h-4 w-4" />
                    Google Play
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-background/20" />
          <div className="text-center text-sm opacity-60">
            <p>&copy; 2024 Memory Diary. Все права защищены.</p>
            <p className="mt-2">support@memorydiary.ru</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
