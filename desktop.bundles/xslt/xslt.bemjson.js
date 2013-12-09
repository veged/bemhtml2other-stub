([
    '<?xml version="1.0" encoding="utf-8"?>',
    {
        tag: 'xsl:stylesheet',
        attrs: {
            'xmlns:xsl' : 'http://www.w3.org/1999/XSL/Transform',
            'version': '1.0'
        },
        content: [
            {
                tag: 'xsl:output',
                attrs: {
                    encoding: 'UTF-8',
                    method: 'html',
                    indent: 'no',
                    'media-type': 'text/html; charset=UTF-8',
                    'doctype-system': 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd',
                    'doctype-public': '-//W3C//DTD XHTML 1.0 Transitional//EN',
                    'omit-xml-declaration': 'yes'
                }
            },

            {
                tag: 'xsl:template',
                attrs: { match: '/' },
                content: {
                    block: 'page',
                    title: 'Title of the page',
                    favicon: '/favicon.ico',
                    head: [
                        { elem: 'css', url: '_xslt.css', ie: false },
                        { elem: 'css', url: '_xslt.ie.css', ie: 'gte IE 6' },
                        { elem: 'meta', attrs: { name: 'description', content: '' }}
                    ],
                    content: [
                        { tag: 'xsl:apply-templates' },
                        { elem: 'js', url: '_xslt.js' }
                    ]
                }
            },

            {
                tag: 'xsl:template',
                attrs: { match: 'head' },
                content: {
                    block: 'header',
                    content: { tag: 'xsl:apply-templates' }
                }
            },

            {
                tag: 'xsl:template',
                attrs: { match: 'article' },
                content: {
                    block: 'content',
                    content: { tag: 'xsl:apply-templates' }
                }
            },

            {
                tag: 'xsl:template',
                attrs: { match: 'foot' },
                content: {
                    block: 'footer',
                    content: { tag: 'xsl:apply-templates' }
                }
            }
        ]
    }
])
