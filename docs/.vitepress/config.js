module.exports = {
  title: 'DTM教程',
  description: 'GO语言分布式事务管理服务',
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', type: 'image/jpeg', href: '/imgs/dtm.jpg' }]],
  themeConfig: {
    logo: '/imgs/dtm.jpg',
    sidebar: {
      '/config/': 'auto',
      '/plugins': 'auto',
      // catch-all fallback
      '/': [
        {
          text: '基础',
          children: [
            {
              text: '安装',
              link: '/guide/install'
            },
            {
              text: 'Why',
              link: '/guide/why'
            },
            {
              text: '开始',
              link: '/guide/start'
            }
          ]
        },
        {
          text: '概况',
          children: [
            {
              text: '架构',
              link: '/summary/arch'
            },
            {
              text: '代码概况',
              link: '/summary/code'
            },
          ]
        },
        {
          text: '实践',
          children: [
            {
              text: 'SAGA',
              link: '/practice/saga'
            },
            {
              text: 'TCC',
              link: '/practice/tcc'
            },
            {
              text: 'XA',
              link: '/practice/xa'
            },
            {
              text: '事务消息',
              link: '/practice/msg'
            },
            {
              text: '其他',
              link: '/practice/other'
            },
            {
              text: '选择合适的模式',
              link: '/practice/choice'
            }
          ]
        },
        {
          text: '异常处理',
          children: [
            {
              text: '异常',
              link: '/exception/exception'
            },
            {
              text: '子事务屏障',
              link: '/exception/barrier'
            }
          ]
        },
        {
          text: '其他',
          children: [
            {
              text: '其他框架',
              link: '/other/opensource'
            },
            {
              text: '分布式事务',
              link: '/other/distributed'
            }
          ]
        },
      ]
    }
  }
}