import PropTypes from 'prop-types';

export default function SelectionType({selected, store}) {

    switch(selected) {
        case 'Stores':       
            return <img src={store.Stores} alt="" style={{width: '100%'}} loading='eager'/>;
        case 'Food':
            return <img src={store.Food} alt="" style={{width: '100%'}} loading='eager'/>;
        case 'Drinks':
            return <img src={store.Drinks} alt="" style={{width: '100%'}} loading='eager'/>;
        case 'Snacks':
            return <img src={store.Snacks} alt="" style={{width: '100%'}} loading='eager'/>;
    }
}

SelectionType.propTypes = {
    selected: PropTypes.string.isRequired,
    store: PropTypes.object.isRequired,
  };
