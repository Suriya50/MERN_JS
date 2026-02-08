const Alert = ({ message }) => {
  if (!message) return null;

  return (
    <div className="bg-green-500 text-white p-2 text-center rounded mb-4">
      {message}
    </div>
  );
};

export default Alert;