import React from "react";
import axios from 'axios';
import Bicycle from './Bicycle';
import './App.css';


class App extends React.Component {

  state = {
    isLoading : true,
    data : {},
  };

  getBicycle() {
      const API_KEY = process.env.REACT_APP_API_KEY;
      const url = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/bikeList/1/5/`;
      //console.log(url);

      axios.get(url).then((response) => {
          const data = response.data.rentBikeStatus.row[0];
          //console.log(data);
          //return;
          this.setState({
              isLoading: false,
              data: data,
          });
      });
  }
  componentDidMount() {
      this.getBicycle();
  }

  render(){
    const {isLoading , data } =this.state;
    //console.log("1111",data.stationName)
    return (
      
      <section className="container">
        { isLoading ? 
        (
          <div className="loader">
              <span className="loader_text">Loading...</span>
          </div>
          ) : (
            <div className="none">
              <Bicycle
                  dataName = {data.stationName}
                  dataCnt = {data.rackTotCnt}
                  dataTotal ={data.parkingBikeTotCnt}
              />
            </div>   
          ) }

      </section>
    );
  }
  
}

export default App;
