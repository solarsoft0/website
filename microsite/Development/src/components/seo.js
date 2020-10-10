import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import appleIcon57 from '../images/fav/apple-icon-57x57.png'
import appleIcon60 from '../images/fav/apple-icon-60x60.png'
import appleIcon72 from '../images/fav/apple-icon-72x72.png'
import appleIcon76 from '../images/fav/apple-icon-76x76.png'
import appleIcon114 from '../images/fav/apple-icon-114x114.png'
import appleIcon120 from '../images/fav/apple-icon-120x120.png'
import appleIcon144 from '../images/fav/apple-icon-144x144.png'
import appleIcon152 from '../images/fav/apple-icon-152x152.png'
import appleIcon180 from '../images/fav/apple-icon-180x180.png'
import androidIcon192 from '../images/fav/android-icon-192x192.png'
import favIcon16 from '../images/fav/favicon-16x16.png'
import favIcon32 from '../images/fav/favicon-32x32.png'
import favIcon96 from '../images/fav/favicon-32x32.png'
import msIcon from '../images/fav/ms-icon-144x144.png'

const favManifest = '../images/fav/manifest.json'

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={site.siteMetadata.title}
      titleTemplate={site.siteMetadata.title}
      meta={[
        {
          name: `description`,
          content: site.siteMetadata.description,
        },
        {
          property: `og:title`,
          content: site.siteMetadata.title,
        },
        {
          property: `og:description`,
          content: site.siteMetadata.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: site.siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: site.siteMetadata.description,
        },
      ].concat(meta)}
    >
      <link rel="apple-touch-icon" sizes="57x57" href={appleIcon57} />
      <link rel="apple-touch-icon" sizes="60x60" href={appleIcon60} />
      <link rel="apple-touch-icon" sizes="72x72" href={appleIcon72}/>
      <link rel="apple-touch-icon" sizes="76x76" href={appleIcon76}/>
      <link rel="apple-touch-icon" sizes="114x114" href={appleIcon114} />
      <link rel="apple-touch-icon" sizes="120x120" href={appleIcon120} />
      <link rel="apple-touch-icon" sizes="144x144" href={appleIcon144} />
      <link rel="apple-touch-icon" sizes="152x152" href={appleIcon152} />
      <link rel="apple-touch-icon" sizes="180x180" href={appleIcon180} />
      <link rel="icon" type="image/png" sizes="192x192"  href={androidIcon192} />
      <link rel="icon" type="image/png" sizes="32x32" href={favIcon32} />
      <link rel="icon" type="image/png" sizes="96x96" href={favIcon96} />
      <link rel="icon" type="image/png" sizes="16x16" href={favIcon16} />
      <link rel="manifest" href={favManifest} />
      <meta name="msapplication-TileImage" content={msIcon} />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object)
}

export default SEO
