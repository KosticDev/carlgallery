import Card from './Card';
import './gallery1.css';
import card1_1 from './001/001_1.mp4';
import card2_1 from './002/002_1.mp4';
import card3_1 from './003/003_1.mp4';
import card4_1 from './004/004_1.mp4';

function Gallery1() {
    return (
        <div className="gallery1">
            <div className='container'>
                <div className='card_list'>
                    <Card title={'Serenity Series 1'} code={'CGAQRPO1'} card1={card1_1} />
                    <Card title={'Serenity Series 2'} code={'CGAQRPO2'} card1={card2_1} />
                    <Card title={'Serenity Series 3'} code={'CGAQRPO3'} card1={card3_1} />
                    <Card title={'Serenity Series 4'} code={'CGAQRPO4'} card1={card4_1} />
                </div>
                <div className='mint1'>
                    <p>Mint</p>
                </div>
            </div>
        </div>
    )
}

export default Gallery1;