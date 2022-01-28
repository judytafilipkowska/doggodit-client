import "./FeedPage.css"
import ProfileBox from "../../components/ProfileBox/ProfileBox"
import Feed from "../../components/Feed/Feed";

function FeedPage() {
    return ( 
        <div className="feed">
            <div className="feed-left"><ProfileBox/></div>
            <div className="feed-center"><Feed/></div>
        </div>
     );
}

export default FeedPage;