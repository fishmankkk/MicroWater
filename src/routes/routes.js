import Test from '../view/test/index';
import Dashboard from '../view/home_page/dashboard/dashboard';
const pageRoutes = [
  { path: '/Homepage',
    component: Dashboard,
    exact: true
  },
  { path: '/Homepage/Test',
    component: Test,
    exact: true
  }
]
export default pageRoutes;