const  images = {
    Clear: require('../assets/clear.jpg'),
    Hail: require('../assets/hail.jpg'),
    Snow: require('../assets/snow.jpg'),
    Rain: require('../assets/rain.jpg'),
    Thunder: require('../assets/thunder.jpg'),
};
 export default weather => images[weather];