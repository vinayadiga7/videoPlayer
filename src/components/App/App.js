import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./App.css";
import youtube from "../../API/youtube";
import VideoList from "../VideoList/VideoList";
import VideoDetails from "../VideoDetails/VedioDetails";

const KEY = "AIzaSyA_q_vd_JPJZObAvirCeRZryYXDiQsSF_w";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  onVideoSelect = (video) => {
    console.log("Selected Video: ");
    console.log(video);
    this.setState({
      selectedVideo: video,
    });
  };

  componentDidMount() {
    this.onFormSubmit("material-ui");
  }

  onFormSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 7,
        key: KEY,
        q: term,
        type: "video",
        videoDuration: "short",
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  render() {
    return (
      <div className="ui container search-1">
        <SearchBar onSearchComplete={this.onFormSubmit} />
        <div className="ui grid">
          <div className="ten wide column">
            <VideoDetails video={this.state.selectedVideo} />
          </div>
          <div className="six wide column">
            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
