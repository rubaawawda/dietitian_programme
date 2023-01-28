import React, { useState } from "react";
import "./tabs.css";

function Tabs({ tabs = [], editable = false,props }) {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [allTabs, setAllTabs] = useState(tabs);

    const NewTabButton = (
        <div className="btn" onClick={() => createNewTab()}>
            +
        </div>
    );

    const NewTab = (
        <div>
            <label>New Tab</label>
            <p>This is a new tab.</p>
        </div>
    );

    const createNewTab = () => {
        const newTabs = allTabs;
        newTabs.push({ name: "New Tab", content: NewTab });
        setAllTabs(newTabs);
        setActiveTabIndex(newTabs.length - 1);
    };

    const activateTab = (tab,index) => {
        setActiveTabIndex(index);
        
    };

    return (
        <div className="TabView">

            <div className="body">
                {allTabs.length === 0 ? (
                    <div className="tabs">
                        <div>No Tabs</div>
                        {editable ? NewTabButton : null}
                    </div>
                ) : (
                    <div>
                        <div className="tabs">
                            {allTabs.map((tab, index) => (
                                <label
                                    key={index}
                                    className={index === activeTabIndex ? "active-tab" : "tab"}
                                    onClick={() => activateTab(tab,index)}
                                >
                                    {tab.name}
                                   
                                </label>
                            ))}
                            {editable ? NewTabButton : null}
                        </div>
                        <div className="content">{allTabs[activeTabIndex].content}</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Tabs;