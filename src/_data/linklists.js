import resolveLinks from '../../plugins/utils/resolveLinks'

export default (pagePath, config) => {
  const linklists = {
    main: [
      {
        title: '大和住宅について',
        url: '/about.html',
      },
      {
        title: '委託管理について',
        url: '#',
      },
      {
        title: '会社情報 ',
        url: '/company.html',
      },
      {
        title: '物件情報',
        url: '#',
      },
    ],
    hamburgerpc: [
      {
        title: '大和住宅について',
        title_en: 'About us',
        url: '/about.html',
      },
      {
        title: 'お知らせ',
        title_en: 'Information',
        url: '#',
      },
      {
        title: '委託管理について',
        title_en: 'Consignment management',
        url: '#',
      },
      {
        title: '灘エリアのご紹介',
        title_en: 'Nada style',
        url: '#',
      },
      {
        title: '会社情報',
        title_en: 'Company',
        url: '/company.html',
      },
      {
        title: 'コラム',
        title_en: 'Colmun',
        url: '#',
      },
      {
        title: '物件情報',
        title_en: 'For sale & rent',
        url: '#',
      },
      {
        title: 'お問い合わせ',
        title_en: 'Contact',
        url: '#',
      },
      {
        title: '賃貸管理トラブル集',
        title_en: 'FAQ',
        url: '#',
      },
    ],
    hamburgersp: [
      {
        title: '大和住宅について',
        title_en: 'About us',
        url: '/about.html',
      },
      {
        title: '委託管理について',
        title_en: 'Consignment management',
        url: '#',
      },
      {
        title: '会社情報',
        title_en: 'Company',
        url: '/company.html',
      },
      {
        title: '物件情報',
        title_en: 'For sale & rent',
        url: '#',
      },
      {
        title: '賃貸管理トラブル集',
        title_en: 'FAQ',
        url: '#',
      },
      {
        title: 'お知らせ',
        title_en: 'Information',
        url: '#',
      },

      {
        title: '灘エリアのご紹介',
        title_en: 'Nada style',
        url: '#',
      },
      {
        title: 'コラム',
        title_en: 'Colmun',
        url: '#',
      },

      {
        title: 'お問い合わせ',
        title_en: 'Contact',
        url: '#',
      },
    ],
  }

  return resolveLinks(linklists, pagePath, config)
}
