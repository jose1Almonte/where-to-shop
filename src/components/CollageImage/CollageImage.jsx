import Styles from './CollageImage.module.css'
import allCheese from '../../images/todoQuesoFront.jpg'
import paloVerdeCaracas from '../../images/paloVerdeCaracas.jpg'
import PropTypes from 'prop-types';
import SelectionType from '../SelectionType/SelectionType';

const productsCollection = [
    {
        Stores: allCheese,
        Food: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZVp2CWnp6fl0Mf9jZJ2A1LghgdJFulEQ8Rg&usqp=CAU',
        Drinks: 'data:image/jpeg;base64,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',
        Snacks: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z4uVR2l3MZiPMLc35-9-4Y1T8NerNRvh9A&usqp=CAU',
    },
    {
        Stores: paloVerdeCaracas,
        Food: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIHBhUQBxMVFRUQFRkSFxgXFRcQFRMWFxcXGRUSFRUYHighGBolHxUWITEiJSkrLjEuFx8zODMtNygtLjcBCgoKDg0OGhAQGi0lHx0tLy03LS0tLS0tLy0tLS0tLS0tLi0tLS0tNS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIDBAYHAQj/xAA8EAEAAQIDAwgGCgEFAQAAAAAAAQIDBBEhBRIxBgciQVFhcbETM4GRocEUIyQyQlJy0eHx8DSCssLyFf/EABsBAQACAwEBAAAAAAAAAAAAAAABAgMEBQYH/8QAKxEBAAICAQQCAQIGAwAAAAAAAAECAxEEBRIhMUFRIhNxMoGRobHRFEJS/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMPae0rezLG/i6suyOM1d0Qra8Vjcs2Dj5M9u2kNI2py5uXpmMDlbjt+9V750j3NS/ImfT0HH6LSvnJ5n+yAu7fv11Z13rk/76vJh/Ut9unXgYYj+CP6QrscqL+Hno3a/bVNUe6c4TGW0fKl+m4b+6wn9l84OVzd2jTEx+anSqO+Y4T8GavJ/9OZyOh+N4p/lLeMDjbePw8XMJVFVM9ceUx1S262i0bhwMuK+K3beNSyEsYAAAAAAAAAAAAAAAAAAAACzjMTTg8LVcvfdojOf2jvRaYiNyvjxzkvFK+5ce5Q7ar2pjKq708dIiOER1Uw5t7zedy9xwuJTBSKww7OGquRr1q6bNrxC5e2fVRRnP7mpRXLWZR163VajOuNOtDPExPiFq1PpfV6T3ibRr2m+S/KGvYm0Iq1mmZyrp/NHh+aOplx3mkuXz+DXkY9fMepdmw9+nE2Ka7E501xFUT2xOsS6ETuNw8Vas0tNbe4XEqgAAAAAAAAAAAAAAAAAAANI5wduU04OcPh5zqz6fZGk5U+PDNq57+O2Hd6RxLTeMto8fH+3KKcTnideqdf4amnsOzVW34aYqtRVb7PdKzm33vUrszNc9Kc9EqRqGPdoppjpdaNMkWlGX66MLT0csuP8ACrPHdZHYzEUXKN61x4/2lkito8S6bzV7W+mbLqs1zn6Kd6n9NXGPZP8AybnHt419PJ9b4/6eWLx/2/y3lsOIAAAAAAAAAAAAAAAAAAAA4VylxFVzaN7ey9ZVlrx183Nt5tL3nCpEY6ftDUN6aK0R7djcTCTwm26sNaykmNNfJgraVdXKS5l0DuhX/jU+WLd2zcufeR3LxhrDCvYqq7V05lHcyRqPS16We070bbtza7anZm0c51iuabcx3TOs+XuZcN9TtxOsceM1NfXl3R0HigAAAAAAAAAAAAAAAAAACdIB84bfvzGIq766pz8J6nMfROJEdsfsjKcTM+tyq8f3WiG12x8eGRTdw9dMeloqievKc49mvyVtCkxkj1Kj0Niqro11R4/+VNQd2T6ezg7U0Z0XY+HzyT2Qjvv9LX0e1T9657v6R2wd1/o3rNqOjE1T35/0nVUTF5TfI2r6byjs0bukV0+/ej+WSnm0NLn/AIce07+JfQzovBgAAAAAAAAAAAAAAAAAAKL05WZnunyRKa+4fNe34mMTnVPGdI7Oqfjm5z6Hxp/FGRwX1qG0pqliubUzLGjbzNCNvM0o2qjVlrBtuHNZY9Lypt59VWfuiZ+TJhj8ocnrF9ceXfm+8UAAAAAAAAAAAAAAAAAAAt4n/T1fpnyRPpavuHzdt61vX4mOuqr4zMtCHvuPbxpFVdGdF21ErdU5zow39p2pzYzbyRWZeQmEbXIZoTt0Tmds+k29nHC3RVPtmN3/ALM2KPycDrVtYtfcu1Np5UAAAAAAAAAAAAAAAAAABbvxNViqKOMxOXjloiU19+Xz1tunLG5THCqrSeMcf6aH29xx5/DaDxdG7Xp4phu0tuGHVxYre1nkyqTLyZFZl5TOq1URK9ap3qmWC1tQ7BzNYTdouXMuFO77ZnP5NjFHnby/Wcm5irpzO4QAAAAAAAAAAAAAAAAAAADifOZgfoXKSqqY0uZXKeqOlpVPviWrlrqXqul5u7DEfXhpWKqiaZjhPZP+ZMWnWqj5pnLVWYZlHFTSqrcmJ1hMVCiiap0helfKN68pLZuEm/iKaafxTFMRxmZmcmbXxDXzZYrEzL6K5M7Do2Dsum1YjXKJrnjNVWWvs45NitdQ8Zyc9s15tKWWa4AAAAAAAAAAAAAAAAAAADU+cbk//wDb2LvYeM7tjOumI41U/jo7+GceHerau4b/AE/k/o5PPqXDps5zMV/FqzXT1cXWvokZdHzUXi7z0E0zpMm0zd7VamY+9Vr3yQjviFiMJvXOuV4r8onLEOt82XIucPu4vaNOWXSt0zxmeq5MdkdXv7GzWunnOo87vmcdHTl3GAAAAAAAAAAAAAAAAAAAAAAapyk5C4fbVc3LX1V2rWaqY6NU9tVPb3wrNYlvcfn5cMa9w59tfkDjNm60U03aI/FRVGftpqyn3ZsU4nXxdTw39zqUPZ5PYvEX9y1ZrznhGWXxnREYp+meedhiN9ycwPNpjcTV9oii1HXvVRVPsijNaMTWydVxR/DuW8cneb7DbJrivFfXXI1iaoyoie2KOv25skViHLz9Qy5fEeIbgs0AAAAAAAAAAAAAAAAAAAAAAAAEftmfs8R2z5QmEwj9i2ft2c9UTPy+ZKZlsCFQAAAAAAAAAAAAAAAAAAAAAAAAAEftWN6aY8fkmB5su3u1zPd/nkSlIoQAAAAAAAAAAAAAAAAAAAAAAAAAAj9oTnejw/daBd2fHRlEjLQAAAAAAAAAAAAAAAAAAAAAAAAAAI7G64haPQyMDGVn2okZKAAAAAAAAAAAAAAAAAAAAAAAAAABGYmd7ET4rfAzcLGVmESLyAAAAAAAAAAAAAAAAAAAAAAAAAABFb2d6r9U+a4kbHqoUkXAAAAAAAAAAAAAAAAAAAAAAAAAAAQlqc6s+2VxM24ytx4KCoAAAAAAAAAAAAAAAAAAAAAAAAAHlc5UT4AhLEaMkicYwAAAAAAAAAAAAAAAAAAAAAAAAABRf9TV4T5JgRWHp6ceK0oTCiQAAAAAAAAAAAAAAAAAAAAAAAAAFvEeonwTHsR+Hj62PFaUJRRIAAAAAAAAAAAAAAAAAAAAAAAAACi7R6S3MR1pgY1nCTRciapjRM2RpmKpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q==',
        Drinks: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbY3ebnLdoR252YfZPPZxJD4nYHrBLp3BskQ&usqp=CAU',
        Snacks: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjTWmlY3iFFSnNhIKp-mt99K02LapcPx3eiA&usqp=CAU',
    },
    {
        Stores: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_7rTY6n7FsLGNHxACy-YvUaWVdsI9EzBCA&usqp=CAU',
        Food: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRpc4peUO9bM1TcYtjR6UoHHKr1-MCUQYuEQ&usqp=CAU',
        Drinks: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyrsNOyR_uUwrTJYX0sIFIOXheljktE2ZEqA&usqp=CAU',
        Snacks: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnXqB_4tgRBnxOwPcUvCLmlSUg697hDNMP6A&usqp=CAU',
    },
    {
        Stores: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHx3TqiyDbMUXZ-mgVSZnNvpLw78p2_oiHSA&usqp=CAU',
        Food: 'data:image/jpeg;base64,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',
        Drinks: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdrpqhiXWlr2e7OSmQd2wBYeV3eJ906I6A2w&usqp=CAU',
        Snacks: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaVWneH52GauzobO9e0GwWD1gQMEL4TCYf7w&usqp=CAU',
    },
    {
        Stores: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3WR7DZDirxwFFiT0W8vYsGSS4GqnCxXkcSJSUjdctOrqm-X_qoOVKf3lo7iJ_t3J_Jo&usqp=CAU',
        Food: 'data:image/jpeg;base64,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',
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