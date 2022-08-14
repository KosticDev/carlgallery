import Card from "./Card";
import gallery2_1 from './Dart Vider (1).png';
import gallery2_2 from './Dart Vider (2).png';
import gallery2_3 from './Dart Vider (3).png';
import gallery2_4 from './Dart Vider (4).png';
import gallery2_5 from './Dart Vider (5).png';
import gallery2_6 from './Dart Vider (6).png';
import gallery2_7 from './Dart Vider (7).png';
import gallery2_8 from './Dart Vider (8).png';
import gallery2_9 from './Dart Vider (9).png';
import gallery2_10 from './Dart Vider (10).png';
import gallery2_11 from './Dart Vider (11).png';
import gallery2_12 from './Dart Vider (12).png';

function Gallery2() {
    return (
        <div className="container">
            <div className="gallery2">
                <div className="previous">
                    <i className="fa fa-angle-left"></i>
                </div>
                <div className="row">
                    <Card title={'Serenity Series 1'} code={'CGAQRPO1'} gallery={gallery2_1} />
                    <Card title={'Serenity Series 1'} code={'CGAQRPO2'} gallery={gallery2_2} />
                    <Card title={'Serenity Series 1'} code={'CGAQRPO3'} gallery={gallery2_3} />
                    <Card title={'Serenity Series 1'} code={'CGAQRPO4'} gallery={gallery2_4} />
                </div>
                <div className="row">
                    <Card title={'Serenity Series 1'} code={'CGAQRPO5'} gallery={gallery2_5} />
                    <Card title={'Serenity Series 1'} code={'CGAQRPO6'} gallery={gallery2_6} />
                    <Card title={'Serenity Series 1'} code={'CGAQRPO7'} gallery={gallery2_7} />
                    <Card title={'Serenity Series 1'} code={'CGAQRPO8'} gallery={gallery2_8} />
                </div>
                <div className="row">
                    <Card title={'Serenity Series 1'} code={'CGAQRPO9'} gallery={gallery2_9} />
                    <Card title={'Serenity Series 1'} code={'CGAQRPO10'} gallery={gallery2_10} />
                    <Card title={'Serenity Series 1'} code={'CGAQRPO11'} gallery={gallery2_11} />
                    <Card title={'Serenity Series 1'} code={'CGAQRPO12'} gallery={gallery2_12} />
                </div>
                <div className="next">
                    <i className="fa fa-angle-right"></i>
                </div>
                <div className="mint1">
                    <p>Mint</p>
                </div>
            </div>
        </div>
    )
}

export default Gallery2;