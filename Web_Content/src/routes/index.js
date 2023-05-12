// Layouts
import { HeaderOnly } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import ListCompaniesPage from '~/pages/ListCompaniesPage';
import ProfilePage from '~/pages/ProfilePage';
import LoginPage from '~/pages/LoginPage';
import TableFeedPage from '~/pages/TableFeedPage';
import JobPage from '~/pages/JobPage';
import JobAppliedPage from '~/pages/JobAppliedPage';
import SaveJobPage from '~/pages/SaveJobPage';
import SupportPage from '~/pages/SupportPage';
import TopUserPage from '~/pages/TopUserPage';
import SignUpPage from '~/pages/SignUpPage';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/listcompanies', component: ListCompaniesPage },
    { path: '/profile', component: ProfilePage },
    { path: '/login', component: LoginPage, layout: HeaderOnly },
    { path: '/job', component: JobPage },
    { path: '/jobapplied', component: JobAppliedPage },
    { path: '/savejob', component: SaveJobPage },
    { path: '/support', component: SupportPage },
    { path: '/tablefeed', component: TableFeedPage },
    { path: '/topuser', component: TopUserPage },
    { path: '/signup', component: SignUpPage, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
