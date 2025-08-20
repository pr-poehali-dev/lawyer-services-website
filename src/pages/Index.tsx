import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', 
    '14:00', '15:00', '16:00', '17:00'
  ];

  const services = [
    {
      icon: 'Scale',
      title: 'Гражданское право',
      description: 'Защита прав и интересов граждан в различных правовых спорах',
      price: 'от 3000 ₽'
    },
    {
      icon: 'Building',
      title: 'Корпоративное право',
      description: 'Юридическое сопровождение бизнеса и корпоративных споров',
      price: 'от 5000 ₽'
    },
    {
      icon: 'FileText',
      title: 'Договорное право',
      description: 'Составление, проверка и сопровождение договоров',
      price: 'от 2000 ₽'
    },
    {
      icon: 'Home',
      title: 'Недвижимость',
      description: 'Сделки с недвижимостью, оформление прав собственности',
      price: 'от 4000 ₽'
    }
  ];

  const documents = [
    { name: 'Образец искового заявления', type: 'PDF' },
    { name: 'Типовой договор купли-продажи', type: 'DOCX' },
    { name: 'Доверенность на представление интересов', type: 'PDF' },
    { name: 'Заявление на возврат товара', type: 'DOCX' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-legal-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <Icon name="Scale" size={32} className="text-primary" />
              <h1 className="text-2xl font-heading font-bold text-gray-900">Parus Legal Services</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-primary font-body">Услуги</a>
              <a href="#consultation" className="text-gray-700 hover:text-primary font-body">Консультации</a>
              <a href="#documents" className="text-gray-700 hover:text-primary font-body">Документы</a>
              <a href="#contact" className="text-gray-700 hover:text-primary font-body">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-heading font-bold text-gray-900 mb-6">
            Профессиональные юридические услуги
          </h1>
          <p className="text-xl font-body text-gray-600 mb-8 max-w-3xl mx-auto">
            Защищаем ваши права и интересы с 2010 года. Индивидуальный подход к каждому клиенту 
            и гарантия результата.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на консультацию
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="font-heading">Запись на консультацию</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label className="font-body">Выберите дату</Label>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                    />
                  </div>
                  <div>
                    <Label className="font-body">Выберите время</Label>
                    <div className="grid grid-cols-4 gap-2 mt-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedTime(time)}
                          className="font-body"
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="name" className="font-body">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="font-body">Телефон</Label>
                    <Input id="phone" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <Label htmlFor="question" className="font-body">Вопрос</Label>
                    <Textarea id="question" placeholder="Опишите вашу ситуацию" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Подтвердить запись
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Бесплатная консультация
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center text-gray-900 mb-12">
            Наши услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-blue-legal-100 rounded-full w-fit">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="font-heading text-lg">{service.title}</CardTitle>
                  <CardDescription className="font-body">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-heading font-bold text-primary mb-4">
                    {service.price}
                  </div>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section id="documents" className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-legal-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center text-gray-900 mb-12">
            Типовые документы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-legal-100 rounded-lg">
                        <Icon name="FileText" size={20} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-gray-900">{doc.name}</h3>
                        <p className="font-body text-sm text-gray-500">{doc.type}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Icon name="Download" size={16} className="mr-1" />
                      Скачать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center text-gray-900 mb-12">
            Контакты
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-legal-100 rounded-full">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-gray-900 mb-2">Адрес</h3>
                  <p className="font-body text-gray-600">
                    г. Москва, ул. Тверская, д. 15, оф. 301
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-legal-100 rounded-full">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-gray-900 mb-2">Телефон</h3>
                  <p className="font-body text-gray-600">+7 (495) 123-45-67</p>
                  <p className="font-body text-gray-600">+7 (926) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-legal-100 rounded-full">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="font-body text-gray-600">info@juridservice.ru</p>
                  <p className="font-body text-gray-600">consult@juridservice.ru</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-legal-100 rounded-full">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-gray-900 mb-2">Режим работы</h3>
                  <p className="font-body text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                  <p className="font-body text-gray-600">Сб: 10:00 - 16:00</p>
                  <p className="font-body text-gray-600">Вс: выходной</p>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Обратная связь</CardTitle>
                <CardDescription className="font-body">
                  Заполните форму и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="contact-name" className="font-body">Имя</Label>
                  <Input id="contact-name" placeholder="Ваше имя" />
                </div>
                <div>
                  <Label htmlFor="contact-phone" className="font-body">Телефон</Label>
                  <Input id="contact-phone" placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <Label htmlFor="contact-email" className="font-body">Email</Label>
                  <Input id="contact-email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <Label htmlFor="contact-message" className="font-body">Сообщение</Label>
                  <Textarea id="contact-message" placeholder="Опишите вашу ситуацию" rows={4} />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Scale" size={28} className="text-blue-legal-500" />
                <h3 className="text-xl font-heading font-bold">Parus Legal Services</h3>
              </div>
              <p className="font-body text-gray-300">
                Надежная правовая защита для физических и юридических лиц
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="font-body text-gray-300 space-y-2">
                <li>Гражданское право</li>
                <li>Корпоративное право</li>
                <li>Договорное право</li>
                <li>Недвижимость</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Информация</h4>
              <ul className="font-body text-gray-300 space-y-2">
                <li>О компании</li>
                <li>Наши юристы</li>
                <li>Отзывы клиентов</li>
                <li>Блог</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <div className="font-body text-gray-300 space-y-2">
                <p>+7 (495) 123-45-67</p>
                <p>info@juridservice.ru</p>
                <p>г. Москва, ул. Тверская, 15</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center font-body text-gray-400">
            <p>&copy; 2024 Parus Legal Services. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;