function Artist(props) {
    return (
        <div className='pic'>
            <img src={props.artist} alt=''></img>
            <p>{props.name}</p>
        </div>
    )
}

export default Artist;