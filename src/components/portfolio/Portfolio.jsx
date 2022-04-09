import React from 'react'
import './portfolio.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import OC from '../../assets/SubCategoryImgs.png'

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-mobile">
        <h2>&nbsp;&nbsp;Portfolio&nbsp;&nbsp;</h2>
        <Tabs>
          <TabList>
            <Tab>OpenCart</Tab>
            <Tab>Games</Tab>
          </TabList>

          <TabPanel>
            <img src={OC} alt="OC Extension"/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae illo velit dolor facere unde reiciendis, sed beatae laborum amet adipisci.</p>
          </TabPanel>
          <TabPanel>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quod amet error possimus. Ex repudiandae hic consectetur cum provident a, ab porro eum nemo totam, impedit dolorum amet reprehenderit debitis nulla est quam quae doloremque earum quidem ipsa cupiditate. Amet nihil quae saepe maxime aut natus ratione fugiat quo sapiente.</h5>
          </TabPanel>
        </Tabs>
      </div>
      <div className="portfolio-desktop">
        <h2>&nbsp;&nbsp;Portfolio&nbsp;&nbsp;</h2>
        <Tabs>
          <TabList>
            <Tab>OpenCart</Tab>
            <Tab>Games</Tab>
          </TabList>

          <TabPanel className="tabpanel">
            <img src={OC} alt="OC Extension"/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae illo velit dolor facere unde reiciendis, sed beatae laborum amet adipisci.</p>
          </TabPanel>
          <TabPanel className="tabpanel">
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quod amet error possimus. Ex repudiandae hic consectetur cum provident a, ab porro eum nemo totam, impedit dolorum amet reprehenderit debitis nulla est quam quae doloremque earum quidem ipsa cupiditate. Amet nihil quae saepe maxime aut natus ratione fugiat quo sapiente.</h5>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

export default Portfolio