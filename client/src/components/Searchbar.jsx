function Searchbar() {
  return (
    <div className="w-full max-w-sm min-w-[200px]">
      <div className="relative">
        <input
          className="ease border-gray/30 focus:border-gray hover:border-gray w-full rounded-md border bg-transparent py-2 pr-28 pl-3 text-sm text-black shadow-sm transition duration-300 focus:shadow focus:outline-none"
          placeholder="Inscriptions, concours..."
        />
        <button
          className="bg-gray absolute top-1 right-1 flex items-center rounded border border-transparent px-2.5 py-1 text-center text-sm text-white shadow-sm transition-all hover:bg-gray-700 hover:shadow focus:bg-gray-700 focus:shadow-none active:bg-gray-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-2 h-4 w-4">
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>
          Rechercher
        </button>
      </div>
    </div>
  );
}

export default Searchbar;
