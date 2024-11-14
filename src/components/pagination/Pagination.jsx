import PropTypes from 'prop-types';

const Pagination = ({ currentPage, totalPages, totalItems, itemsPerPage, onPageChange }) => {
  const handlePageClick = (page) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  // Menghitung range data yang sedang ditampilkan
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`mx-1 px-3 py-1 rounded ${i === currentPage ? 'bg-zinc-400 text-white' : 'bg-zinc-600 text-white hover:bg-zinc-400'}`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-between py-4 font-bold text-base">
      <div className="text-zinc-400">
        {`Showing ${startItem}-${endItem} of ${totalItems}`}
      </div>

      <div className="flex items-center">
        <button
          className="px-3 py-1 mx-1 bg-zinc-700 text-white rounded hover:bg-zinc-600"
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {renderPageNumbers()}

        <button
          className="px-3 py-1 mx-1 bg-zinc-700 text-white rounded hover:bg-zinc-600"
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
