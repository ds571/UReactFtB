import React, { useEffect } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TechItem from './TechItem';
import { getTechs } from '../../actions/techActions'

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  //const [techs, setTechs] = useState([]); // using app level state and passing them in as props instead
  //const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  /*
  const getTechs = async () => {
    setLoading(true);
    const res = await fetch("/techs");
    const data = await res.json();

    setTechs(data);
    setLoading(false);
  }; */ // no longer need this because we are calling this from the actions

  return (
    <div id='tech-list-modal' className='modal'>
        <div className='modal-content'>
            <h4>Technician List</h4>
            <ul className='collection'>
                {!loading && techs!== null && techs.map(tech => (
                    <TechItem tech={tech} key={tech.id} />
                ))}
            </ul>
        </div>
    </div>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tech: state.tech
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
