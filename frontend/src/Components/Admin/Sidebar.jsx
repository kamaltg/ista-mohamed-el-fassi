import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
    const location = useLocation()
  const [newsExpanded, setNewsExpanded] = useState(true);

  return (
    <aside className="w-64 bg-[#004a93] text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Menu Admin</h2>

      <div className="mb-6">
        <button
          onClick={() => setNewsExpanded(!newsExpanded)}
          className="flex items-center justify-between w-full px-4 py-2 bg-[#003366] rounded-md mb-2 hover:bg-[#002244] transition-colors"
        >
          <span>News</span>
          <span>{newsExpanded ? "−" : "+"}</span>
        </button>

        {newsExpanded && (
          <ul className="ml-4 space-y-2">
            <li>
              <Link
                to="/Admins/Actualite/create"
                className={location.pathname==="/Admins/Actualite/create" ? "block px-4 py-2 rounded  bg-[#003366] ":"block px-4 py-2 rounded hover:bg-gray-700"}
                
                >
                Ajouter Annonce
              </Link>
            </li>
            <li>
              <Link
                to="/Admins/Actualite/createTag"
                className={location.pathname==="/Admins/Actualite/createTag" ? "block px-4 py-2 rounded  bg-[#003366] ":"block px-4 py-2 rounded hover:bg-gray-700"}
              >
                Ajouter Tags
              </Link>
            </li>
          </ul>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
