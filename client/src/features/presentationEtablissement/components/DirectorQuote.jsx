import photoDirector from "@/assets/images/photo-director.png";

const motDuDirector = {
  photo: photoDirector,
  quote: "Former aujourd’hui les compétences de demain.",
  name: "Mohamed KARAOUI",
  role: "Directeur, ISTA MOHAMED EL FASSI - ERRACHIDIA",
};

function DirectorQuote() {
  return (
    <section className="border-gray flex flex-col items-center justify-center gap-12 border-y-1 py-8 sm:flex-row">
      <div className="bg-gray/30 overflow-clip rounded-full">
        <img
          src={motDuDirector.photo}
          className="max-h-50 translate-x-2 object-cover"
          alt="photo de directeur"
        />
      </div>

      <div className="flex flex-col">
        <blockquote className="relative text-center">
          <div className="relative z-10">
            <p className="text-4xl text-gray-800">
              <em className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  className="-700 text-gray/20 absolute -start-8 -top-8 size-16 sm:h-24 sm:w-24">
                  <path
                    fill="currentColor"
                    d="M7.398 10.3c0 .773-.25 1.4-.747 1.88-.497.453-1.125.68-1.885.68-.916 0-1.676-.307-2.278-.92-.576-.613-.864-1.493-.864-2.64 0-1.227.34-2.427 1.021-3.6.707-1.2 1.69-2.147 2.946-2.84l.903 1.4c-.68.48-1.23 1.013-1.65 1.6-.392.587-.654 1.267-.785 2.04.236-.107.51-.16.825-.16.733 0 1.335.24 1.807.72.471.48.707 1.093.707 1.84Zm7.226 0c0 .773-.248 1.4-.746 1.88-.498.453-1.126.68-1.885.68-.917 0-1.676-.307-2.278-.92-.576-.613-.864-1.493-.864-2.64 0-1.227.34-2.427 1.02-3.6.708-1.2 1.69-2.147 2.947-2.84l.903 1.4c-.68.48-1.23 1.013-1.65 1.6-.392.587-.654 1.267-.785 2.04.236-.107.51-.16.825-.16.733 0 1.335.24 1.806.72.472.48.707 1.093.707 1.84Z"
                  />
                </svg>
                <span className="relative z-10 font-bold">
                  {motDuDirector.quote}
                </span>
              </em>
            </p>
          </div>
        </blockquote>
        <p className="mt-4 text-center text-xl font-medium">
          {motDuDirector.name}
        </p>
        <p className="text-center">{motDuDirector.role}</p>
      </div>
    </section>
  );
}

export default DirectorQuote;
