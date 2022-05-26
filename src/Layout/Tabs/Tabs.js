import React, { useEffect, useState } from 'react';

export default function Tabs({ tabList, toggleTab }) {
    const [tabs, setTabs] = useState(tabList);

    useEffect(() => {
        setTabs(tabList);
    }, [tabList]);

    return (
        <ul className="nav nav-tabs">
            { Object.keys(tabs).map((key, index) => {
                return (
                   <li className={"nav-item nav-link" + (tabs[key] ? " active" : "")} key={index} onClick={() => toggleTab(key)}>
                    { key }
                   </li>
                );
            })}
        </ul>
    );
}