import { useState } from 'react';
import { Category } from './../Category/Category.jsx';
import './TabContainer.css';

export const TabContainer = ({categories}) => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            label: 'Categorias',
            content: <Category categories={categories}></Category>
        }
    ];

    return (
        <div className='tab-container'>
            <div className='tab-buttons'>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={activeTab === index ? 'active' : ''}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className='tab-content'>
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

export default TabContainer;