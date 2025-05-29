import navLinks from "@/data/navLinks.json";
import DesktopDropdown from "@/layouts/navbar/DesktopDropdown";
import NavItem from "@/layouts/navbar/NavItem";

function DesktopNavLinks() {
  return (
    <div>
      <ul className="flex flex-wrap justify-center gap-4 text-sm">
        {navLinks.map(
          (item) =>
            !item.hidden && (
              <li key={item.label}>
                {item.href ? (
                  <NavItem to={item.href} label={item.label} />
                ) : (
                  <DesktopDropdown label={item.label} dropdown={item.dropdown}>
                    {item.dropdown &&
                      item.dropdown.map((subItem) => (
                        <li key={subItem.label}>
                          <NavItem to={subItem.href} label={subItem.label} />
                        </li>
                      ))}
                  </DesktopDropdown>
                )}
              </li>
            ),
        )}
      </ul>
      <div></div>
    </div>
  );
}

export default DesktopNavLinks;
