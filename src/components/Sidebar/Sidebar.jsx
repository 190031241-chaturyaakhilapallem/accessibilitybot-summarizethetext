import React, { useContext } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets'; // Assuming assets has the bot image or logo
import { Context } from '../../context/Context';
import logo from '../Sidebar/bot.jpeg'

const Sidebar = () => {
    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

    // Function to handle prompts loading
    const loadPrompt = async (prompt) => {
        await onSent(prompt);
        setRecentPrompt(prompt);
    };

    return (
        <div className="sidebar">
            {/* Bot Image/Logo at the Top */}
            <div className="sidebar-logo">
                <img src={logo} alt="Bot Logo" className="bot-logo" />
            </div>
        </div>
    );
};

export default Sidebar;
