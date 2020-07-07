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

  onFormSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
    });
  };

  render() {
    return (
      <div className="ui container search-1">
        <SearchBar onSearchComplete={this.onFormSubmit} />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}
export default App;
