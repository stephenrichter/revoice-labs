import React from 'react'
import styled from "styled-components";
import Content, { HTMLContent } from '../components/Content'

import devices from '../img/masthead-devices.png';
import wave from '../img/masthead-wave.svg';

export const HomePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  const Masthead = styled.section`
    height: 100vh;
    padding-bottom: 350px;
    padding-top: 200px;

    &:after {
      background: url(${wave}) no-repeat top;
      background-size: cover;
      bottom: -1px;
      content: "";
      display: block;
      min-height: 240px;
      position: absolute;
      width: 100%;
      z-index: -1;
    }

    @media (max-width: 768px) {
      padding-top: 100px;
    }
  `

  const MastheadTitle = styled.h1`
    color: #363636;
    font-size: 3.25rem;
    font-weight: 300;
    line-height: 1.125;
    margin-bottom: 1.5rem;
  `

  const MastheadSubtitle = styled.h2`
    font-size: 1.375rem;
    line-height: 1.375;
    color: rgb(100, 111, 121);
  `
  
  const MastheadImage = styled.img`
    height: auto;
    max-width: 100%;
    position: absolute;
    left: 50%;

    @media (max-width: 768px) {
      left: 0%;
    }
  `

  const ColorSection = styled.section`
    background-color: rgb(238,90,58);
    color: white;
  `

  return (
    <div>
      <Masthead>
        <div className="container">
          <div className="columns">
            <div className="column is-one-third is-offset-1">
              <MastheadTitle>
                {title}
              </MastheadTitle>
              <MastheadSubtitle className="subtitle">
                We help you grow your business with creative marketing solutions, while preparing you for a voice-first world. 
              </MastheadSubtitle>
              <div class="field is-grouped">
                <div class="control is-expanded">
                  <input class="input is-medium" type="email" placeholder="yourname@company.com" />
                </div>
                <p class="control">
                  <a class="button is-medium is-info is-outlined">Get Started</a>
                </p>
              </div>
            </div>
            <MastheadImage src={devices} alt="Google Home, Amazon Echo, Sonos One" />
          </div>
        </div>
      </Masthead>
      <ColorSection className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </ColorSection>
    </div>
  )
}

export default ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <HomePageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
