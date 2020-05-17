import React, {useState , useEffect} from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import  VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = '';

    
const App = ()=>{
    
    const [videos,setVideos] = useState([]);
    const [selectedVideo,setSelectedVideo] = useState(null);
    
    
    useEffect(()=>{
        
    });
    

    const onTermSubmit = async term =>{
        const response = await youtube.get('/search',{
            params: {
                q: term,
                part: 'snippet',
                maxResults: 5,
                key: KEY
            }
        });
    

        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
        //this.setState({videos : response.data.items, selectedVideo: response.data.items[0]});
    };
    /*onVideoSelect = (video)=>{
        
        //this.setState({selectedVideo : video});
    }*/

        return (
            <div className="ui container">
                <SearchBar onFormSubmit={onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={setSelectedVideo} videos={videos}/>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default App;
