import telegram from './img/telegram.svg';
import viber from './img/viber.svg';
import whatsapp from './img/whatsapp.svg';

export const navbarReferences = [
    {title: 'Услуги', ref: '/', mobileAppearance: true,},
    {title: 'Виджеты', ref: '/', mobileAppearance: true,},
    {title: 'Интеграции', ref: '/', mobileAppearance: true},
    {title: 'Кейсы', ref: '/', mobileAppearance: true,},
    {title: 'Сертификаты', ref: '/', mobileAppearance: false,},
]

export const contacts = [
    {icon: false, description: '+7 555 555-55-55', ref: '/', class: 'phone'},
    {icon: telegram, description: 'tg', ref: '/', class: 'telegram'},
    {icon: viber, description: 'v', ref: '/', class: 'viber'},
    {icon: whatsapp, description: 'w', ref: '/', class: 'whatsapp'},
    {icon: false, 
     description: 'Москва, Путевой проезд 3с1, к 902', 
     ref: 'https://yandex.ru/maps/-/CPCjrns', 
     class: 'address'},
]
export const promotionGifts = [
    {title: 'Виджеты', description: "30 готовых решений", short: '30 виджетов'},
    {title: 'Dashboard', description: "с показателями вашего бизнеса", short: 'Dashboard'},
    {title: 'Skype аудит', description: "отдела продаж и CRM системы", short: 'Skype аудит'},
    {title: '35 дней', description: "использования CRM", short: 'Месяц аmoCRM'},
]

export const aboutReferences = [
    {title: 'Партнёрская программа', ref: '/'},
    {title: 'Вакансии', ref: 'https://hh.ru/'},
]

export const servicesReferences = [
    {title: 'Расчёт стоимости', ref: '/'},
    {title: 'Кейсы', ref: '/'},
    {title: 'Услуги', ref: '/'},
    {title: 'Благодарственные письма', alt:'Благодарность клиентов', ref: '/'},
    {title: 'Виджеты', ref: '/'},
    {title: 'Сертификаты', ref: '/'},
    {title: 'Интеграции', ref: '/'},
    {title: 'Блог на Youtube', ref: 'https://www.youtube.com'},
    {title: 'Наши клиенты', ref: '/'},
    {title: 'Вопрос / Ответ', ref: '/'},
]

export const mobileScreenSize = 540;

export const defaultAppearVariants = {
    visible: (i = 0) => ({opacity: 1, y: 0, transition: {duration: .5, delay: .3 * i, ease: 'linear'}}),
    hidden: {opacity: 0, y: 20},
  }