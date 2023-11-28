
import PropTypes from 'prop-types';

const Tab = ({ tab, isActive, onTabClick }) => {
    return (
        <button
            className={`px-10 py-2  ${isActive && 'bg-black text-white'}`}
            onClick={() => onTabClick(tab.id)}
        >
            {tab.label}
        </button>
    );
};

Tab.propTypes = {
    tab: PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        content: PropTypes.node.isRequired,
    }).isRequired,
    isActive: PropTypes.bool.isRequired,
    onTabClick: PropTypes.func.isRequired,
};

export default Tab;
