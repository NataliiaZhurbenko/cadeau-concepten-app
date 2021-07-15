import useGetCatsData from "../useGetCatsData";
import Cat from "../Cat/Cat";
import "./CatsList.css";

function CatsList() {
  const catsData = useGetCatsData();
  const catslistItems = catsData.map((cat, index) => (
    <Cat
      key={index}
      name={cat.name}
      image={cat.image}
      description={cat.description}
    />
  ));

  return <div className="CatsList">{catslistItems}</div>;
}

export default CatsList;
