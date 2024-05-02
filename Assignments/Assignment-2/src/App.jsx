import React from "react";
import Card from "./Card";

import "./assets/css/components/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mockData: [
        {
          id: 1,
          userInfo: {
            username: "user1",
            email: "user1@example.com",
            avatar: "https://picsum.photos/200/300?random=1",
          },
          profileInfo: {
            age: 25,
            gender: "male",
            city: "New York",
          },
        },
        {
          id: 2,
          userInfo: {
            username: "user2",
            email: "user2@example.com",
            avatar: "https://picsum.photos/200/300?random=2",
          },
          profileInfo: {
            age: 30,
            gender: "female",
            city: "Los Angeles",
          },
        },
        {
          id: 3,
          userInfo: {
            username: "user3",
            email: "user3@example.com",
            avatar: "https://picsum.photos/200/300?random=3",
          },
          profileInfo: {
            age: 28,
            gender: "male",
            city: "Chicago",
          },
        },
        {
          id: 4,
          userInfo: {
            username: "user4",
            email: "user4@example.com",
            avatar: "https://picsum.photos/200/300?random=4",
          },
          profileInfo: {
            age: 35,
            gender: "female",
            city: "Houston",
          },
        },
        {
          id: 5,
          userInfo: {
            username: "user5",
            email: "user5@example.com",
            avatar: "https://picsum.photos/200/300?random=5",
          },
          profileInfo: {
            age: 27,
            gender: "male",
            city: "San Francisco",
          },
        },
        {
          id: 6,
          userInfo: {
            username: "user6",
            email: "user6@example.com",
            avatar: "https://picsum.photos/200/300?random=6",
          },
          profileInfo: {
            age: 32,
            gender: "female",
            city: "Miami",
          },
        },
        {
          id: 7,
          userInfo: {
            username: "user7",
            email: "user7@example.com",
            avatar: "https://picsum.photos/200/300?random=7",
          },
          profileInfo: {
            age: 29,
            gender: "male",
            city: "Seattle",
          },
        },
        {
          id: 8,
          userInfo: {
            username: "user8",
            email: "user8@example.com",
            avatar: "https://picsum.photos/200/300?random=8",
          },
          profileInfo: {
            age: 33,
            gender: "female",
            city: "Boston",
          },
        },
        {
          id: 9,
          userInfo: {
            username: "user9",
            email: "user9@example.com",
            avatar: "https://picsum.photos/200/300?random=9",
          },
          profileInfo: {
            age: 31,
            gender: "male",
            city: "Denver",
          },
        },
        {
          id: 10,
          userInfo: {
            username: "user10",
            email: "user10@example.com",
            avatar: "https://picsum.photos/200/300?random=10",
          },
          profileInfo: {
            age: 26,
            gender: "female",
            city: "Austin",
          },
        },
      ],
    };
  }

  render() {
    return (
      <>
        <h1 className="heading">Assignment-2</h1>
        <div className="main-container">
          {this.state.mockData.map((data, index) => {
            return (
              <Card
                key={index}
                profile={data.userInfo.avatar}
                user={data.userInfo.username}
                email={data.userInfo.email}
                age={data.profileInfo.age}
                city={data.profileInfo.city}
                gender={data.profileInfo.gender}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default App;
