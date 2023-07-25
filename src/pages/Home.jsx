import {MdKeyboardDoubleArrowDown} from 'react-icons/md'

const Home = () => {
    return (
        <section className="dashboard">
            <video controls={false} loop width="100%"muted autoPlay>
                <source src="https://firebasestorage.googleapis.com/v0/b/imaginecinemas-4c290.appspot.com/o/FAST%20X%20_%20Official%20Trailer.mp4?alt=media&amp;token=42a560fc-1ee5-4ca1-a951-7299bfbc0a29"
                 type="video/mp4" />

            </video>
            <div className="mInfo">
                <h1>FAST X</h1>
                <p>Barry Allen uses his super speed to change the past, but his attempt to save his family creates a world without super heroes, forcing him to race for his life in order to save the future.</p>
                <div className="mButton">
                    <button>MORE INFO</button>
                    <button>JOIN US</button>
                </div>
            </div>

            <div className="arrDown">
                <MdKeyboardDoubleArrowDown size={70} color='white'/>
            </div>
        </section>
    )
}

export default Home