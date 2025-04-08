import Overview from '../components/Overview';
import DataTable from '../components/DataTable';
import Header from '../components/Header';
const Dashboard = () => {
  return (
    <div className='space-y-4'>
      <Header title="Dashboard" ></Header>
      <Overview />
      <DataTable />
    </div>
  );
};

export default Dashboard;