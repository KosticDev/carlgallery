import './content.css';
import img1 from './content1.png';
import img2 from './content2.png';

function Content() {
    return (
        <div className='content'>
            <div className='container'>
                <div className='content1'>
                    <div className='content1_left mar'>
                        <p>A members-only art community driven by you.</p>
                        <p className='desc'>GEN.ART was founded on the belief that a 5,000 strong community of like-minded people interested in generative art would be a force to be reckoned with. And thankfully we've been proven right. We have a community of smart thinkers, builders, passionate collectors and world class artists. Together all ushering in a new creative renaissance.</p>
                        <div>Enter DAO</div>
                    </div>
                    <div className='content2_right'>
                        <img src={img1} alt='' />
                    </div>
                </div>
                <div className='content2'>
                    <div className='content1_right mar'>
                        <img src={img2} alt='' />
                    </div>
                    <div className='content1_left'>
                        <p>All art is fully on-chain</p>
                        <p className='desc'>Each GEN.ART collection is stored immutably on the Ethereum blockchain and IPFS giving owners the ability to generate the artwork from source without any dependency to third parties.</p>
                        <div>Read Docs</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;