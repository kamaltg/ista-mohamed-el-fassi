function NotreMission() {
  const notreMission = {
    text: "L’ISTA Mohamed El Fassi Errachidia a pour mission principale de former des professionnels qualifiés, capables de s'intégrer rapidement dans le monde du travail et de répondre efficacement aux besoins des entreprises. Nous visons à doter nos apprenants de compétences techniques et comportementales de haut niveau.",
    images: [
      "https://www.cours-gratuit.com/images/thumb/167/id-1335.webp",
      "https://www.sinpress.ma/wp-content/uploads/2023/06/inbound1940487853019975535.jpg",
      "https://static.lematin.ma/files/lematin/images/articles/2017/12/f29de8bdd60686a1befa99908ef749d6.jpg",
    ],
  };

  return (
    <div className="space-y-8">
      <p className="text-xl text-gray-500">{notreMission.text}</p>
      <div className="flex w-full flex-wrap gap-2">
        {notreMission.images.map((image, index) => (
          <img
            key={`image-${index}`}
            className="h-40 flex-1 object-cover"
            src={image}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}

export default NotreMission;
