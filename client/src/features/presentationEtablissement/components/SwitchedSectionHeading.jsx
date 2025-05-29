function SwitchedSectionHeading({ number, heading }) {
  return (
    <h4 className="text-blue mb-12 text-4xl font-medium">
      {number}. {heading}
    </h4>
  );
}

export default SwitchedSectionHeading;
