import Styles from './CollageImage.module.css'
import allCheese from '../../images/todoQuesoFront.jpg'
import paloVerdeCaracas from '../../images/paloVerdeCaracas.jpg'
// import paloVerdeCaracas2 from '../../images/paloVerdeCaracas2.jpeg'
import PropTypes from 'prop-types';

const storesCollection = [
    {
        imageSrc: allCheese
    },
    {
        imageSrc: paloVerdeCaracas
    },
    {
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_7rTY6n7FsLGNHxACy-YvUaWVdsI9EzBCA&usqp=CAU'
    },
    {
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHx3TqiyDbMUXZ-mgVSZnNvpLw78p2_oiHSA&usqp=CAU'
    },
    {
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3WR7DZDirxwFFiT0W8vYsGSS4GqnCxXkcSJSUjdctOrqm-X_qoOVKf3lo7iJ_t3J_Jo&usqp=CAU'
    },
]

const foodCollection = [
    {
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_7rTY6n7FsLGNHxACy-YvUaWVdsI9EzBCA&usqp=CAU'
    },
    {
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHx3TqiyDbMUXZ-mgVSZnNvpLw78p2_oiHSA&usqp=CAU'
    },
    {
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3WR7DZDirxwFFiT0W8vYsGSS4GqnCxXkcSJSUjdctOrqm-X_qoOVKf3lo7iJ_t3J_Jo&usqp=CAU'
    },
]



export default function CollageImage({selected}) {
    const PhotoGallery = () => {
        
        switch(selected) {
            case 'Stores':
                return (
                    <>
                    {
                    storesCollection.map((store, index) => (
                        <div className={`${Styles.pics}`} key={index}>
                            <img src={store.imageSrc} alt="" style={{width: '100%'}} />
                        </div>
                    ))
                    }
                    </>
                )
            case 'Food':
                return (
                    <>
                    {
                    foodCollection.map((store, index) => (
                        <div className={`${Styles.pics}`} key={index}>
                            <img src={store.imageSrc} alt="" style={{width: '100%'}} />
                        </div>
                    ))
                    }
                    </>
                )
                
        }
    }

  return (
    <>
        <div className={Styles.gallery}>
        {
                storesCollection.map((store, index) => (
                    // <div className={`${Styles.pics}`} key={index}>
                    //     <img src={store.imageSrc} alt="" style={{width: '100%'}} />
                    // </div>
                    <PhotoGallery key={index}/>
                ))
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