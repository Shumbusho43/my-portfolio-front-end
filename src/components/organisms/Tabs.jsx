// Tabs.js
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tab from '../molecules/Tab';

// eslint-disable-next-line react/prop-types
const Tabs = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="container mx-auto">
      <div className="mx-auto border border-black w-fit my-8">
        {tabsData.map((tab) => (
          <Tab
            key={tab.id}
            tab={tab}
            isActive={tab.id === activeTab}
            onTabClick={handleTabClick}
          />
        ))}
      </div>
      <div className="mt-16">
        {tabsData.map((tab) => (
          <div
            key={tab.id}
            className={`tab-content ${tab.id === activeTab ? 'block' : 'hidden'}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default Tabs;
