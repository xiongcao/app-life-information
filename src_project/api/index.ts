const origin_hefeng = 'https://devapi.qweather.com/v7';
const key = 'aa548dddbb694a4982bfa3416482d446';
const location = '101200101'; // 114.2986,30.5844,
// 117.8071293, 31.7632864
const origin_juhe = 'https://v.juhe.cn';
const key_juhe = 'afec90a7da1c4869759ac6b04ba23593';

// const Request = (url, params) => {
//     return new Promise((resolve, reject) => {
//         fetch(url, params).then(res => res.json()).then(res => resolve(res)).catch(err = > reject(err))
//     })
// }

// 获取三天天气预报
export const findThreeDays = async () => {
  try {
    const res = await (
      await fetch(
        `${origin_hefeng}/weather/3d?key=${key}&location=117.8071293,31.7632864`,
      )
    ).json();

    if (res.code === '200') {
      return res.daily;
    } else {
      [];
    }
  } catch (error) {
    console.log('fetch error: ' + error);
  }
};

// 获取生活指数
export const findIndices = async (type = 0) => {
  try {
    const res = await (
      await fetch(
        `${origin_hefeng}/indices/1d?key=${key}&location=${location}&type=${type}`,
      )
    ).json();
    if (res.code === '200') {
      return res;
    } else {
      [];
    }
  } catch (error) {
    console.log('fetch error: ' + error);
  }
};

// 获取城市信息
export const findCityInfo = async () => {
  try {
    const res = await (
      await fetch(
        `https://geoapi.qweather.com/v2/city/lookup?key=${key}&location=${location}`,
      )
    ).json();
    if (res.code === '200') {
      return res;
    } else {
      [];
    }
  } catch (error) {
    console.log('fetch error: ' + error);
  }
};

// 获取新闻列表
export const findNewsList = async (type = 0) => {
  try {
    const res = await (
      await fetch(`${origin_juhe}/toutiao/index?key=${key_juhe}&type=${type}`)
    ).json();
    if (res.error_code === 0) {
      return res.result.data;
    } else {
      [];
    }
  } catch (error) {
    console.log('fetch error: ' + error);
  }
};
