import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import ResultsScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  Results: ResultsScreen
},{
  initialRouteName: 'Search',
  defaultNavigationOptions:{
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);