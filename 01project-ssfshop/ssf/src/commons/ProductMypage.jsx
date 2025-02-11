import { useState } from "react";

export default function ProductMypage({ tabs = [] }) {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className="gods-detail">
            <div className="tab-rects" role="tablist" style={{ width: "auto", transform: "translateY(0px)", backgroundColor: "green" }}>
                <ul id="goodsDetailTabs">
                    {tabs.map((tab) => (
                        <li
                            key={tab.id}
                            id={tab.id}
                            role="tab"
                            aria-selected={activeTab === tab.id}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <a href={tab.href} role="button" tabIndex="0">
                                {tab.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
