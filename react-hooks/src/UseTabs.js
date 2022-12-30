import { useState } from "react";

const UseTabs = (initialTab, allTabs) => {
    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    const currentItem = allTabs[currentIndex];
    const onClick = (event) => {
        setCurrentIndex((check) => event.target);
    };
    return (
        <div>
            {allTabs.map((section) => (
                <button value={} onClick={onClick}>
                    {section.tab}
                </button>
            ))}
        </div>
    );
};

export default UseTabs;
