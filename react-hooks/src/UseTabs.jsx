import { useState } from "react";

const UseTabs = ({ initialTab, allTabs }) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);

    const currentItem = allTabs[currentIndex];

    const handleClick = (event, key) => {
        console.log(event.target, key);
        setCurrentIndex(key);
    };

    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }
    console.log(currentItem.content);

    return (
        <div>
            {allTabs.map((section, key) => (
                <button onClick={(event) => handleClick(event, key)} key={key}>
                    {section.tab}
                </button>
            ))}
            <div>{currentItem.content}</div>
        </div>
    );
};

export default UseTabs;
