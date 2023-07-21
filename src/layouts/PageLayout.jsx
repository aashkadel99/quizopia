import PropTypes from 'prop-types';

const PageLayout = ({children}) => {
  return (
    <div className='w-11/12 mx-auto'>{children}</div>
  )
}

PageLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PageLayout