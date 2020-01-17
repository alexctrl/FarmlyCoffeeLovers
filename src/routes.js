import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Main from './pages/main';
import Feed from './pages/feed';
import AddCoffee from './pages/add-coffee';
import MyProfile from './pages/my-profile';
// import Account from './pages/main';

const Routes = createStackNavigator({
SignIn,
SignUp,
Main,
Feed,
AddCoffee,
MyProfile,
});

const RoutesCtn = createAppContainer(Routes);

export default RoutesCtn;