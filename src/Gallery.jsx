import axios from "axios";
import { useQuery } from "react-query";
import { useGlobalContext } from "./context";

const url =
  "https://api.unsplash.com/search/photos?client_id=7iqm9FdTf-NDd0C0OrtPPAtuT6CgCv7LDiTxKcmz8ac";

const Gallery = () => {
  const { searchTherm, setSearchTerm } = useGlobalContext();
  const response = useQuery({
    queryKey: ["images", searchTherm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTherm}`);
      return result.data;
    },
  });
  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>loading...</h4>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There was an error</h4>
      </section>
    );
  }

  const results = response.data.results;
  if (results.length < 1) {
    <section className="image-container">
      <h4>No results found...</h4>
    </section>;
  }
  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;