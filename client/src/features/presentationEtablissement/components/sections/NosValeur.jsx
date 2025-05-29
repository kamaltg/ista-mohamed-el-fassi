import { IoRocketSharp } from "react-icons/io5";
import { PiHandshakeFill } from "react-icons/pi";
import { TbSettingsSpark } from "react-icons/tb";

function NosValeur() {
  const nosValeurs = [
    {
      icon: <TbSettingsSpark />,
      title: "Professionnalisme",
      content:
        "Nous formons avec exigence, rigueur et expertise, pour garantir la qualité et la performance de nos lauréats sur le terrain.",
    },
    {
      icon: <PiHandshakeFill />,
      title: "Respect & Inclusion",
      content:
        "Nous valorisons la diversité, l’écoute, et le respect mutuel dans un cadre propice à l’épanouissement de chacun.",
    },
    {
      icon: <IoRocketSharp />,
      title: "Innovation Continue",
      content:
        "Nous encourageons l’amélioration permanente, l’esprit critique et l’adaptabilité face aux nouveaux défis technologiques.",
    },
  ];

  return (
    <ul className="flex flex-wrap gap-4">
      {nosValeurs.map((valeur, index) => (
        <li
          key={index}
          className="border-green flex-1 rounded-xl border-1 px-4 py-8">
          <div className="bg-green mb-4 flex size-12 items-center justify-center rounded-md text-3xl text-white">
            {valeur.icon}
          </div>
          <h5 className="mb-2 text-2xl font-bold">{valeur.title}</h5>
          <p>{valeur.content}</p>
        </li>
      ))}
    </ul>
  );
}

export default NosValeur;
