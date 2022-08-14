const style = {
    color: '#ffb503'
};

function Card(props) {
    return (
        <div>
            <div className="card1">
                <div className="card_video">
                    <video loop muted autoPlay preload='auto' className='video'>
                        <source className="source" src={props.card1} type='video/webm'></source>
                    </video>
                </div>
                <div className="card_desc">
                    <div>{props.title}</div>
                    <div className="text_desc">
                        <div>
                            <p className="col-5" style={style}>Product Code:</p>
                            <p className="col-5">{props.code}</p>
                        </div>
                        <div>
                            <p className="col-5" style={style}>Avaliability:</p>
                            <p className="col-5">In Stock</p>
                        </div>
                        <div>
                            <p className="col-5" style={style}>Artist:</p>
                            <p className="col-5">ABDUL QADER AL RAIS</p>
                        </div>
                        <div>
                            <p className="col-5" style={style}>Details:</p>
                        </div>
                        <div className="buttons">
                            <div className="view">View &nbsp;&nbsp;<i className="fa fa-arrow-right"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;