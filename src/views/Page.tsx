import React from 'react'
import styled from 'styled-components'
import { Flex } from '@trading-planet/uikit'
import Footer from 'components/Menu/Footer'
import { PageMeta } from 'components/Layout/Page'


const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 16px;
  padding-bottom: 0;
  min-height: calc(100vh - 64px);
  background-image: ${({theme}: any) =>  theme.isDark ? 'linear-gradient(to right bottom, #21425d, #153a5e, #0f315e, #13275c, #1d1b57, #371451, #4a0b49, #57003f, #6a1435, #752c2f, #7a422e, #7b5735)' : 'linear-gradient(to right bottom, #4c9bdb, #3685d3, #2d6fc9, #3257bc, #3e3dab, #6e309f, #8e1e8e, #a4007a, #c9306b, #e05c61, #ed8661, #f2ae6e)'
  };

  ${({ theme }) => theme.mediaQueries.xs} {
    background-size: auto;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 24px;
    padding-bottom: 0;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 32px;
    min-height: calc(100vh - 64px);
  }
`

const Page: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <>
      <PageMeta />
      <StyledPage {...props}>
        {children}
        <Flex flexGrow={1} />
        <Footer />
      </StyledPage>
    </>
  )
}

export default Page
