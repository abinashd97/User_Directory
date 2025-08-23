function Pagination({ current, total, onChange }) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  
  return (
    <div className="pagination">
      {pages.map((page) => (
        <button
          key={page}
          className={page === current ? "active" : ""}
          disabled={page === current}
          onClick={() => onChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
