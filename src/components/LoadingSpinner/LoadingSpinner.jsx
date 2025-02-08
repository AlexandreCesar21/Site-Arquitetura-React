import './LoadingSpinner.css'
import loadingImg from '../../assets/loading.gif'; 
function LoadingSpinner() {
    return (
        <div className="d-flex al-center jc-center loading-overlay-container">
            <img src={loadingImg} alt="Loading" height="80px" />
        </div>
    )
}

export default LoadingSpinner