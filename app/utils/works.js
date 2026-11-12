// The ten works, in catalogue order. Text (meta, sector, desc, features)
// lives in i18n under `projects.<slug>`; `meta` reads "role · period · team".
// `lead` is the feature shown as the highlight. `section` is how the system
// is built, top layer first, using only stack facts stated in the copy.
export const works = [
  {
    slug: 'forte',
    title: 'Forte',
    img: '/img/forte.webp',
    url: 'https://goforte.id',
    lead: 2,
    section: {
      interface: ['Next.js 16', 'TypeScript'],
      application: ['Express', 'Prisma', 'BullMQ'],
      data: ['PostgreSQL', 'Redis'],
      services: ['Google Sign-In', 'Bitbucket Pipelines'],
    },
  },
  {
    slug: 'medexpo',
    title: 'Med Expo',
    img: '/img/medexpo.webp',
    url: 'https://medexpo.totalit.co.id',
    lead: 3,
    section: {
      interface: ['Vue 3', 'Inertia.js', 'Tailwind'],
      application: ['Laravel', 'PHPUnit'],
      services: ['Xendit'],
    },
  },
  {
    slug: 'inahrsregistry',
    title: 'InaHRS Registry',
    img: '/img/inahrsregistry.webp',
    url: 'https://inahrsregistry.totalit.co.id',
    lead: 1,
    section: {
      interface: ['Vue 3', 'Inertia.js', 'Tailwind'],
      application: ['Laravel', 'REST API'],
      services: ['Xendit'],
    },
  },
  {
    slug: 'isicam',
    title: 'ISICAM',
    img: '/img/isicam.webp',
    url: 'https://isicam.id',
    lead: 1,
    section: {
      interface: ['Bootstrap 5', 'jQuery'],
      application: ['Laravel', 'REST API'],
      services: ['Xendit', 'Cloudflare Stream', 'ZeptoMail'],
    },
  },
  {
    slug: 'wahanahonda',
    title: 'Wahana Honda',
    img: '/img/wahanahonda.webp',
    url: 'https://www.wahanahonda.com',
    lead: 3,
    section: {
      interface: ['Bootstrap', 'jQuery'],
      application: ['CodeIgniter 4', 'PHP'],
    },
  },
  {
    slug: 'inahrs',
    title: 'InaHRS',
    img: '/img/inahrs.webp',
    url: 'https://inahrs.or.id',
    lead: 1,
    section: {
      interface: ['Vue 2', 'Vuetify', 'Highcharts'],
      application: ['Laravel 11', 'PHP 8.2', 'JSON API'],
    },
  },
  {
    slug: 'festivia',
    title: 'Festivia',
    img: '/img/festivia.webp',
    url: 'https://festivia.id',
    lead: 0,
    section: {
      interface: ['Bootstrap', 'jQuery'],
      application: ['Laravel 10', 'PHP 8.1'],
      services: ['Xendit', 'Midtrans'],
    },
  },
  {
    slug: 'sinau',
    title: 'Sinauyuk!',
    img: '/img/sinau.webp',
    url: 'https://sinauyuk.id',
    lead: 1,
    section: {
      interface: ['Vue 2', 'Vuetify', 'Bootstrap 5'],
      application: ['Laravel 11', 'PHP 8.2'],
      services: ['Midtrans'],
    },
  },
  {
    slug: 'eria',
    title: 'ERIA RKC-MPD',
    img: '/img/eria.webp',
    url: 'https://rkcmpd-eria.org',
    lead: 1,
    section: {
      interface: ['Vue 3', 'Inertia.js', 'Tailwind', 'Tiptap'],
      application: ['Laravel'],
    },
  },
  {
    slug: 'epic',
    title: 'Epic Estate',
    img: '/img/epic.webp',
    url: 'https://epicestate.web.id',
    section: {
      interface: ['Bootstrap 5', 'jQuery'],
      application: ['Laravel'],
      services: ['Firebase'],
    },
  },
];

export const workNo = (i) => String(i + 1).padStart(2, '0');

export const workHost = (url) => new URL(url).host.replace(/^www\./, '');
