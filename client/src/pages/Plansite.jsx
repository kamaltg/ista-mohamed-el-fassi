import navLinks from "@/data/navLinks.json";

const Plansite = () => {
  return (
    <>
      <div className="mx-auto mt-12 flex w-fit flex-wrap items-start justify-center gap-10 space-y-6">
        {navLinks.map((item, idx) => (
          <div
            key={idx}
            className={`${item.dropdown ? "border-gray/30 border-x-1" : ""} px-8`}>
            <h2 className="text-blue text-xl font-semibold">
              {item.href ? (
                <a href={item.href} className="hover:underline">
                  {item.label}
                </a>
              ) : (
                item.label
              )}
            </h2>

            {item.dropdown && (
              <ul className="mt-2 ml-6 list-inside list-disc space-y-1 text-gray-700">
                {item.dropdown.map((subItem, subIdx) => (
                  <li key={subIdx}>
                    <a href={subItem.href} className="hover:underline">
                      {subItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Plansite;
