({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_tt2.css', ie: false },
        { elem: 'css', url: '_tt2.ie.css', ie: 'gte IE 6' },
        { elem: 'meta', attrs: { name: 'description', content: '' }}
    ],
    content:[
        {
            block: 'header',
            content: '[% header %]'
        },
        {
            block: 'content',
            content: '[% article %]'
        },
        {
            block: 'footer',
            content: '[% telephone %], [% email %]'
        },
        { elem: 'js', url: '_tt2.js' }
    ]
})
