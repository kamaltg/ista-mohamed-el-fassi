// images
import cadreImage from "@/assets/images/NOS CONNAÎTRE/cadreStaffAdmin.png";
import imgPersonne from "@/assets/images/NOS CONNAÎTRE/imageStaffDefault.png";
import Container from "@/layouts/Container";

// card Staf
export function CardStaf({ img, nomC, role }) {
  return (
    <>
      <div className="mt-5 flex flex-col items-center gap-2">
        <img src={img} alt="" className="size-36" />
        <h3 className="">{nomC}</h3>
        <span className="text-[#004a93]">{role}</span>
      </div>
    </>
  );
}

export function StaffAdministratifs() {
  const StaffAdmins = [
    { id: 1, name: "Nom PRÉNOM", role: "LE RÔLE", image: imgPersonne },
    { id: 2, name: "Nom PRÉNOM", role: "LE RÔLE", image: imgPersonne },
    { id: 3, name: "Nom PRÉNOM", role: "LE RÔLE", image: imgPersonne },
    { id: 4, name: "Nom PRÉNOM", role: "LE RÔLE", image: imgPersonne },
    { id: 5, name: "Nom PRÉNOM", role: "LE RÔLE", image: imgPersonne },
    { id: 6, name: "Nom PRÉNOM", role: "LE RÔLE", image: imgPersonne },
    { id: 7, name: "Nom PRÉNOM", role: "LE RÔLE", image: imgPersonne },
    { id: 8, name: "Nom PRÉNOM", role: "LE RÔLE", image: imgPersonne },
    { id: 9, name: "Nom PRÉNOM", role: "LE RÔLE", image: imgPersonne },
    { id: 9, name: "Nom PRÉNOM", role: "LE RÔLE", image: imgPersonne },
    { id: 10, name: "Nom PRÉNOM", role: "LE RÔLE", image: imgPersonne },
    { id: 11, name: "Nom PRÉNOM", role: "LE RÔLE", image: imgPersonne },
    { id: 12, name: "Nom PRÉNOM", role: "LE RÔLE", image: imgPersonne },
  ];
  return (
    <Container>
      <div className="container mx-auto p-5">
        <h1 className="text-center text-2xl font-bold text-[#004a93]">
          Premier Corps Administratif
        </h1>
        <div
          className="flex justify-around p-7"
          id="Premier Corps Administratif">
          <CardStaf img={imgPersonne} nomC={"Nom PRÉNOM"} role={"Le Rôle"} />
          <CardStaf img={imgPersonne} nomC={"Nom PRÉNOM"} role={"Le Rôle"} />
          <CardStaf img={imgPersonne} nomC={"Nom PRÉNOM"} role={"Le Rôle"} />
          <CardStaf img={imgPersonne} nomC={"Nom PRÉNOM"} role={"Le Rôle"} />
        </div>
        <div className="my-5 border-b-1 border-[#004a93]"></div>
        <div
          className="relative h-auto w-full bg-cover bg-center"
          id="Tous Staff Adminstration"
          style={{
            backgroundImage: ` url(${cadreImage})`,
          }}>
          <div className="">
            <h1 className="p-3 text-center text-2xl font-bold text-[#004a93]">
              <span className="border-b-4 p-1">Corps</span> Administratif
            </h1>
            <div className="ms-10 mt-5 grid gap-x-2 gap-y-5 p-4 md:grid-cols-5">
              {StaffAdmins.map((person) => (
                <div
                  key={person.id}
                  className="h-[240px] w-[230px] rounded bg-white p-5 shadow">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="mx-auto mb-4 h-35 w-35"
                  />
                  <h3 className="text-lg font-bold text-blue-800">
                    {person.name}
                  </h3>
                  <p className="text-sm text-gray-600">{person.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default StaffAdministratifs;
