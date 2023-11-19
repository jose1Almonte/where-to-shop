import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function LinkComponent({children, url}) {
  return (
    <Link className='noDecoration' to={url}>
        {children}
    </Link>
  )
}

LinkComponent.propTypes = {
    children: PropTypes.node.isRequired,
    url: PropTypes.string.isRequired,
};