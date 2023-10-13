import Styles from './CollageImage.module.css'
import allCheese from '../../images/todoQuesoFront.jpg'
import paloVerdeCaracas from '../../images/paloVerdeCaracas.jpg'
import PropTypes from 'prop-types';
import SelectionType from '../SelectionType/SelectionType';

const productsCollection = [
    {
        Stores: allCheese,
        Food: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_7rTY6n7FsLGNHxACy-YvUaWVdsI9EzBCA&usqp=CAU',
        Drinks: 'data:image/jpeg;base64,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',
        Snacks: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z4uVR2l3MZiPMLc35-9-4Y1T8NerNRvh9A&usqp=CAU',
    },
    {
        Stores: paloVerdeCaracas,
        Food: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHx3TqiyDbMUXZ-mgVSZnNvpLw78p2_oiHSA&usqp=CAU',
        Drinks: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbY3ebnLdoR252YfZPPZxJD4nYHrBLp3BskQ&usqp=CAU',
        Snacks: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjTWmlY3iFFSnNhIKp-mt99K02LapcPx3eiA&usqp=CAU',
    },
    {
        Stores: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_7rTY6n7FsLGNHxACy-YvUaWVdsI9EzBCA&usqp=CAU',
        Food: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3WR7DZDirxwFFiT0W8vYsGSS4GqnCxXkcSJSUjdctOrqm-X_qoOVKf3lo7iJ_t3J_Jo&usqp=CAU',
        Drinks: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyrsNOyR_uUwrTJYX0sIFIOXheljktE2ZEqA&usqp=CAU',
        Snacks: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnXqB_4tgRBnxOwPcUvCLmlSUg697hDNMP6A&usqp=CAU',
    },
    {
        Stores: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHx3TqiyDbMUXZ-mgVSZnNvpLw78p2_oiHSA&usqp=CAU',
        Drinks: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdrpqhiXWlr2e7OSmQd2wBYeV3eJ906I6A2w&usqp=CAU',
        Snacks: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaVWneH52GauzobO9e0GwWD1gQMEL4TCYf7w&usqp=CAU',
    },
    {
        Stores: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3WR7DZDirxwFFiT0W8vYsGSS4GqnCxXkcSJSUjdctOrqm-X_qoOVKf3lo7iJ_t3J_Jo&usqp=CAU',
        Snacks: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQha9HBthRe9Sdd7Vj-j7UFdSupkaAN_uUT-A&usqp=CAU',
    },
]

export default function CollageImage({selected}) {
    const PhotoGallery = () => {
        
        return (
            <>
            {
        productsCollection.map((store, index) => (
            <div className={`${Styles.pics}`} key={index}>
                <SelectionType selected={selected} store={store}/>
            </div>
        ))}
            </>
        )
    }

  return (
    <>
        <div className={Styles.gallery}>
        {
                // storesCollection.map((store, index) => (
                    // <div className={`${Styles.pics}`} key={index}>
                    //     <img src={store.imageSrc} alt="" style={{width: '100%'}} />
                    // </div>
                    // ))
                    <PhotoGallery/>
            }
        </div>
    </>
  )
}

CollageImage.propTypes = {
    selected: PropTypes.string.isRequired,
  };

// export default function CollageImage() {

//   return (
//     <>
//         <div className={Styles.container}>
//             <div className={`${Styles.subContainer} ${Styles.midMarginRight}`}>
//                 <div className={`${Styles.up} ${Styles.midMarginBottom}`}>
//                     <div className={`${Styles.midMarginRight}`}>
//                         <PhotoContainer style={Styles.midMarginBottom}/>
//                         <PhotoContainer style={Styles.midMarginTop}/>
                        
//                     </div>
//                         <PhotoContainer style={Styles.midMarginLeft}/>
//                 </div>
                
//                 <div className={`${Styles.down} ${Styles.midMarginTop}`}>

//                 </div>
//             </div>
//             <div className={`${Styles.subContainer} ${Styles.midMarginLeft}`}>

//             </div>
//         </div>
//     </>
//   )
// }

// function PhotoContainer({style}) {
//     return (
//         <>
//             <div className={`${Styles.photo} ${style}`}/>
//         </>
//     )
// }

// PhotoContainer.propTypes = {
//     style: PropTypes.any.isRequired,
// };