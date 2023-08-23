export default {
  title: '我的博客',
  description: 'my blog',

  themeConfig: {
    nav: getNav(),
    sidebar: getSidebar()
  }
}

function getNav() {
  return [
    { text: 'Guide', link: '/guide' },
    {
      text: 'Dropdown Menu',
      items: [
        { text: 'Item A', link: '/items/item-1' },
        { text: 'Item B', link: '/items/item-2' },
        { text: 'Item C', link: '/items/item-3' }
      ]
    }
  ]
}

function getSidebar() {
  return [
    {
      text: 'Guide',
      items: [
        { text: 'Item A', link: '/items/item-1' },
        { text: 'Item B', link: '/items/item-2' },
        { text: 'Item C', link: '/items/item-3' }
      ]
    }
  ]
}
