import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import SocialSVG from '../images/svg/sprite-icons.svg'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      contentJson {
        footerMenu {
          list {
            name
            items {
              name
              url
              type
            }
          }
        }
      }
    }`
  )

  let footer = data.contentJson.footerMenu

  return (
    <footer css={footerStyles}>
      <SocialSVG />
      <div className="wrapper">
        <div css={footerMenu}>
          <div className="footer-menu-list">
            <h4 css={css`margin-bottom: 0`}>{footer.list.name}</h4>
            <ul>
              {footer.list.items
                .filter(item =>
                  item.type === `internal`
                ).map( (item, idx) =>
                  <li key={idx}>
                    <a
                      href={item.url}
                    >{item.name}</a>
                  </li>
                )
              }
            </ul>
          </div>
          <div className="footer-menu-list">
            <ul className="list-no-title">
              {footer.list.items
                .filter(item =>
                  item.type === `external`
                ).map( (item, idx) =>
                  <li key={idx}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                    >{item.name}</a>
                  </li>
                )
              }
            </ul>
          </div>
        </div>
        <div css={newsletter}>
          <h4>Keep up with us</h4>
          <div>
            <form action="//fonoster.us14.list-manage.com/subscribe/post?u=128404d6884e0be58682f5a6d&amp;id=af0ff5bf29" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
              <input type="email" id="mce-EMAIL" name="EMAIL" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" maxLength="100" placeholder="Email address" required/>
              <div css={hideInput} aria-hidden="true"><input type="text" name="b_128404d6884e0be58682f5a6d_af0ff5bf29" tabIndex="-1" /></div>
              <button type="submit" value="Subscribe" name="subscribe" form="mc-embedded-subscribe-form">Submit</button>
            </form>
          </div>
        </div>
        <div css={socialLinks}>
          <ul>
            <li>
              <a href="https://www.facebook.com/fonoster/" target="_blank" rel="noreferrer">
                <svg>
                  <use href="#facebook"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/fonoster" target="_blank" rel="noreferrer">
                <svg>
                  <use href="#twitter"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://github.com/fonoster" target="_blank" rel="noreferrer">
                <svg>
                  <use href="#github"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/fonoster/" target="_blank" rel="noreferrer">
                <svg>
                  <use href="#linkedin"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p css={css`color: #ffffff; text-align: center`}>© {new Date().getFullYear()}, Fonoster. All Rights Reserved.</p>
    </footer>
  )
}

const hideInput = css`position: absolute; left: -5000px;`

const footerStyles = css`
  background-color: #333741;
  padding: 1em 0;

  & .wrapper {

    @media (min-width: 1080px) {
      display: flex;
      margin-bottom: 3em;
    }
  }

  & h4 {
    color: #fff;
    font-size: 18px;
    text-transform: uppercase;
  }
`

const footerMenu = css`
  display: flex;

  @media (min-width: 1080px) {
    width: 44%;
  }

  & a {
    color: #ffffff;
  }

  & ul {
    padding: 0;

    & li {
      list-style-type: none;
      margin-bottom: 0.5em;
    }
  }

  .footer-menu-list {
    margin-right: 3em;
  }

  & .list-no-title {
    padding-top: 47px;
  }
`

const newsletter = css`
  margin: 0 auto;
  width: 100%;
  @media (min-width: 1080px) {
    width: 44%;
  }

  & input[type=email],
  & button {
    height: 40px;
  }
  & input[type=email] {
    border: none;
    border-radius: 20px 0 0 20px;
    outline: 0;
    padding: 0 1.25em;
    width: 77%;

    @media (min-width: 1080px) {
      max-width: 221px;
      width: 100%;
    }
  }
  & button {
    background-color: #FDBF55;
    border: none;
    border-radius: 0 20px 20px 0;
    color: #333741;
    font-weight: bold;
    padding: 0 1.25em 0 1em;
  }
`

const socialLinks = css`
  margin: 3em auto;
  width: 200px;
  @media (min-width: 1080px) {
    margin: 5em 0 0 0;
    width: 12%;
  }

  & ul {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
  }

  & li {
    list-style-type: none;
  }

  & svg {
    fill: #ffffff;
    height: 24px;
    width: 24px;
  }
`

export default Footer
