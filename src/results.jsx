import Pet from "./pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>no results found</h1>
      ) : (
        pets.map((pet) => {
          <Pet
            animal={pet.animal}
            key={pet.id}
            images={pet.images}
            name={pet.name}
            breed={pet.breed}
            location={`${pet.city}, ${pet.state}`}
          />;
        })
      )}
    </div>
  );
};

export default Results;
