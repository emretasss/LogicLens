import { UserButton } from '@clerk/nextjs';

//00.46 23.05.24

const DashboardPage = () => {
  return (
    <div>
    <p>Dashboard Page </p>

    <UserButton  afterSignOutUrl="/" />
    </div>
    );
}
export default DashboardPage ;
  