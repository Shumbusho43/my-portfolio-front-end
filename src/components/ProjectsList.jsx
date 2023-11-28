// ProjectList.js
import PropTypes from 'prop-types';
import SideLinks from './SidebarLinks';

const ProjectList = ({ projects }) => {
    return (
        <div>
            <SideLinks linksData={projects} />
        </div>
    );
};

ProjectList.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            Description: PropTypes.string.isRequired,
            Link: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ProjectList;
