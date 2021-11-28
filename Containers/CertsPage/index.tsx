import { Container } from '@mui/material'
import dogImage from 'public/cat_5.png'
import cert2 from 'public/certs/23.jpeg'
import cert3 from 'public/certs/IMG-506d893ae3a1de82c8602bf26f27aaf8-V.jpeg'
import cert4 from 'public/certs/Scan0015.jpeg'
import cert5 from 'public/certs/Scan0032.jpeg'
import cert1 from 'public/certs/image-14-01-21-12-10.jpeg'
import React from 'react'

import {
  StyledCert,
  StyledCerts,
  StyledCertsPageWrapper,
  StyledShowMoreArea,
} from 'Containers/CertsPage/style'

import { LayoutForClients } from 'Components/LayoutForClients'
import { PageIntro } from 'Components/PageIntro'
import { Surface } from 'Components/Surface'

interface CertsPageProps {}

const pageTitle: string = 'Сертификаты'

const certs: string[] = [cert1.src, cert3.src, cert4.src, cert2.src, cert5.src]

const CertsPage = ({}: CertsPageProps) => {
  return (
    <LayoutForClients title={pageTitle}>
      <PageIntro backgroundImage={dogImage.src} title={pageTitle} />

      <Surface>
        <Container>
          <StyledCertsPageWrapper>
            <StyledCerts>
              {certs.map(cert => (
                <div className="cert" key={cert}>
                  <StyledCert>
                    <StyledShowMoreArea className="area">
                      <button>Открыть</button>
                    </StyledShowMoreArea>
                    <img src={cert} alt="Сертификат" />
                  </StyledCert>
                </div>
              ))}
            </StyledCerts>
          </StyledCertsPageWrapper>
        </Container>
      </Surface>
    </LayoutForClients>
  )
}

export { CertsPage }
