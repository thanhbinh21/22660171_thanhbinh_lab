import Header from "../components/Header";
const Messages = () => {
  return (
    <div className='space-y-4'>
      <Header title="Messages" ></Header>
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-pink-500 mb-4">Messages</h2>
        <p className="text-gray-700">This is the Messages page.</p>
    </div>
    </div>
  );
}
  export default Messages;