

const DeleteDirectorModal = ({ director, onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out scale-100 w-full max-w-sm sm:max-w-md mx-2">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">Delete Director</h2>
        <p className="mb-4 sm:mb-6 text-gray-700 text-center">
          Are you sure you want to delete <strong>{director.name}</strong> from the list?
        </p>
        <div className="flex justify-end space-x-4">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold py-2 px-4 sm:px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-150"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-150"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDirectorModal;