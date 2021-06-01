import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px; 

  .inner {

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 15px;
      }
    }
  }
`;

const Accomplishments = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Awarded merit-based financial assistance(scholarship) through the MSIS program at the Kelley School of Business, Indiana University',
  'GHCI 2019-2020 Committee Member for Open Source Track - worked with the Committee Chairs in strategizing, planning, reviewing and implementing the Track assigned, in adherence to the process and timelines', 
  'International Scholarship recipient for KubeCon plus CloudNativeCon North America, Europe and China 2019, 2020 organized by Cloud Native Computing Foundation(CNCF)', 
  'CSE Branch Gold Medalist with CGPA 9.83', 
  'Academic Track Captain and Volunteer at DevConf.IN 2019',
  'Mentor at Bit by Bit Hackathon, Red Hat 2018',
  'Red Hat Cultural Activator',
  'Participated in IEEE Programming League (India): All India Rank 42nd',
  'Deloitte India (Offices of the US Social Media Strategist) - Created campus and social media buzz around TechnoUtsav the technical event organized by Deloitte',
'Volunteer at Technieks (college fest) during 2015 and 2016',
'Volunteer and an active member at NISB (college technical group under IEEE) during 2017 and 2018',
'Member of P.A.L.S (Protectors of Animal Life and Surroundings in LaMartiniere Girls’ College during 2006-2014',
'Volunteer at the Missionaries of Charity- Prem Niwas, Lucknow during 2006-2014'];
  return (
    <StyledAboutSection id="accomplishments" ref={revealContainer}>
      <h2 className="numbered-heading">Accomplishments</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>The joy of accomplishment is one of the greatest joy there is.</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>
      </div>
    </StyledAboutSection>
  );
};

export default Accomplishments;