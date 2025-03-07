import { TabContainer } from './../../components/TabContainer/TabContainer.jsx';
import './Dashboard.css';

export const Dashboard = () => {    
    return (
        <div className='dashboard'>            
            <div className='container'>
                <h1>Bienvenido al Dashboard</h1>
                <TabContainer></TabContainer>
            </div>
        </div>
    );
};