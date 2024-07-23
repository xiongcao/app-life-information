import React, {useEffect} from 'react';
import {findThreeDays, findIndices, findCityInfo, findNewsList} from './api';
import MainTab from './routes';

const App = () => {
  const getThreeDays = async () => {
    // const data = await findThreeDays();
    // console.log(data, 'data');
  };

  useEffect(() => {
    getThreeDays();
  }, []);

  return <MainTab />;
};

export default App;
