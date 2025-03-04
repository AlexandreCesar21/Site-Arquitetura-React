import "./Banner.css"

function Banner(props) {
    return (
        <div className="banner d-flex el-end" style={{ backgroundImage: `url(/${props.image})` }}>
            <div className="container">
                <div className="title-panel">
                    <h1>{props.title}</h1> 
                </div>
            </div>            
        </div>
    )
}

export default Banner