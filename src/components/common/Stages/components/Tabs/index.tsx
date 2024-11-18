import classNames from "classnames";
import type { FC, ReactNode } from "react";
import { useState } from "react";

import style from "./index.module.scss";

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className={style.tabs}>
      <div className={style.tabButtons}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={classNames(style.tabButton, {
              [style.active]: activeTab === tab.id
            })}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={style.content}>
        <div key={activeTab} className={style.tab}>
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
