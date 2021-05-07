import Img from './profile_photo.jpeg'


function ProfileContainer (){
    return (
        <div className="profile_container">
        <div className="profile">
            <div className="profile_card">
                <img className="img_profile" src={Img} alt=""/>
                <div className="profile_card_info">
                    <h3>Calvin Candie, 38</h3>
                    <p>A small description about yourself...</p>
                    <p>17 Kilometers away</p>
                </div>  
            </div>
        </div>
        <div className="profile_text">
            <p className="title">Create your profile</p>
            <p className="subtitle">Just by creating your profile at knou you will be able to know people from arround the world and find the perfect match for you!</p>
            <button>Get Started   &#10132</button>
        </div>
    </div>
    )
}
export default ProfileContainer;