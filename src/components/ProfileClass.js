//used class basec component for practice
import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {
        name: "Dummy Name",
        loaction: "dummy location",
      },
    };
  }

  componentDidMount(props) {
    const fetchGithub = async () => {
      const data = await fetch("https://api.github.com/users/tautik");
      const json = await data.json();
      this.setState({
        userData: json,
      });
    };

    fetchGithub();
  }

  componentDidUpdate(prevProps, prevState) {
    // This function is called after an update occurs. It can be used to mimic the behavior
    // of useEffect and track changes in state by comparing prevProps and prevState with
    // this.props and this.state. Here, we are comparing the current userData state with its
    // previous value using prevState. If userData has changed, then perform some action.
    if (this.state.userData !== prevState.userData) {
      // Do something
      // Using the prevState variable to keep track of the previous value of the userData
      // state.
    }
  }

  render() {
    return (
      <div className="flex-1 bg-fuchsia-100">
        <h1>Profile comnponent</h1>
        <img src={this.state.userData.url} alt="" />
        <h2>Name: {this.state.userData.name}</h2>
      </div>
    );
  }
}

export default ProfileClass;
